/*
* redux的简单实现
*/

/*  createStore */
const createStore = (reducer, preloadState, enhancer)=>{
	if(enhancer){
		return enhancer(createStore)(reducer, preloadState)
	}
	let state = {};
	let listenters = [];
	const getState = ()=>{
		return state;
	}

	const dispatch= (action)=>{
		state = reducer(state, action);
		listenters.forEach(listenter=> listenter())
	}

	const subscribe = (listenter)=>{
		listenters.push(listenter);
		return ()=>{
			listenters = listenters.filter(item=> item!==listenter)
		}
	}

	dispatch({})

	return { getState, dispatch, subscribe }
}


/* 
* @desc 中间件核心
* compose */
const compose = (...func)=>{
	if(func.length === 0){
		return arg => arg
	}
	if(func.length === 1){
		return func[0]
	}
	return func.reduce((now,item)=>(...args)=>now(item(...args)))
}


/* applyMiddle */
const applyMiddle = (...middlewares)=>{
	return (createStore)=>(...args)=>{  //  reducer, preloadedState, enhancer
		const store = createStore(...args);
		const apiMiddlewareApi = {
			getState: store.getState,
			dispatch: store.dispatch
		};
		const chains = middlewares.map(middleware=> middleware(apiMiddlewareApi));
		const dispatch = compose(chains)(store.dispatch);
		return {
			...store,
			dispatch
		}
	}
}

const combineReducers=(reducers)=>{
	return (state, action)=>{
		return Object.keys(reducers).reduce((now,item)=>{
			now[key] = reducers[key](state[key], action);
			return now
		},{})
	}
}


const bindActionCreators=(actions,dispatch)=>{
	return Object.keys(actions).reduce((now,item)=>{
		now[item]= (...args)=> dispatch(actions[item](...args))
		return now
	},{})
}
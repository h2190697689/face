const createStore = (reducer, preloadedState, enhancer)=>{
	if(enhancer && typeof enhancer === "function"){
		// 中间件逻辑, 通过中间件增强dispatch,返回新的store
		return enhancer(createStore)(reducer, preloadedState)
	}

	let state = preloadState;
	let listeners = [];

	const getState = ()=> state;

	const dispath=(action)=>{
		state = reducer(state,action);
		listeners.forEach((fn)=>{
			typeof fn === "fn" && fn();
		})
	}

	const subscribe = (listner)=>{
		listeners.push(listner);
		return ()=>{
			listeners = listeners.filter(item=> item===fn);
		}
	}

	const replaceReducer = (nextReducer)=>{
		if(typeof nextReducer === "function"){
			reducer = nextReducer;
			dispath({})
		}
	}

	if(preloadState === undefined){
		dispath({});   // 手动初始state
	}

	return {
		getState,
		dispath,
		subscribe,
		replaceReducer
	}
}

const combineReducers(reducers)=>{
	return (state, action)=>{
		return Object.keys(reducers).reduce((now,item)=>{
			now[item] = reducers[item](state[item], action)
		}, {})
	}
}

const bindActionCreator = (actionCreator, dispatch)=>{
	return (...args)=>{
		return dispatch(actionCreator(...args))
	}
}

const bindActionCreators=(actionCreators,dispatch)=>{
	return Object.keys(actions).reduce((now,item)=>{
		now[item]= bindActionCreator(actionCreators[item], dispatch)
		now[item]= (...args)=> dispatch(actionCreators[item](...args))
		return now
	},{})
}

const compose =(...funcs)=>{
	if(funcs.length === 0){
		return (arg)=> arg
	}
	if(funcs.length === 1){
		return funcs[0]
	}

	return funcs.reduce((a,b)=> (...args)=> a(b(...args)))

}

const applyMiddleware=(...middlewares)=>{
	return (createStore)=>{
		return (reducer, preloadedState)=>{
			const store = createStore(reducer, preloadedState);
			let dispath =  ()=>{}
			const middlewareApi = {
				getState: store.getState,
				dispath: (...args)=> { dispath(...args) }
			}
			const chain = middlewares.map(middleware => middleware(middlewareApi));
			dispath = compose(...chain)(store.dispath);
			return{
				...store,
				dispath
			}
		}
	}
}

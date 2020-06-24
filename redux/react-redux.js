/*  react-reudx实现 */


/*  Provider  */
class Provider extends Component{
	static childContentTypes = {
		store: PropTypes.object
	}

	constructor(props, context){
		super(props, context);
	}

	getChildContext(){
		return {store: this.props.store}
	}
	render() {
		return this.props.children  // 直接渲染内部组件
	}
}


/*  connect */

const connect =(mapStateToProps,mapDispatchToProps)=>(WrapCompontent)=>{
	return class NewComponent extends Component{

		static contextTypes = {
			store: PropTypes.object
		}

		constructor(props, context){
			super(props, context)
			this.state = {
				props: {}
			}
		}

		componentDidMount() {
			const {store} = this.context
			store.subscribe(()=>this.update())
			this.update()
		}
		update() {
			const {store} = this.context
			const stateProps = mapStateToProps(store.getState())
			const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
			this.setState({
				props: {
					...this.state.props,
					...stateProps,
					...dispatchProps
				}
			})
		}
		render(){
			return <WrapComponent {...this.state.props} />
		}
	}
}




// 新api
const Context = React.createContext({store: {}});  // 里面为默认值
// <Context.Provider value={}></Context.Provider>
内部组件
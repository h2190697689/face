#### react-router-dom 
1. 参数存在于url中   this.props.match.params
2. query方式(明文); history.push({pathname: "/user", query: {id:3, name: "sam"}})   
   this.props.location.query
3. state(非明文):  history.push({pathname:"/user", state:{id:3, name:"sam"}})
	this.props.location.state

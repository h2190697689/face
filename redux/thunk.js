function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => {
  	return next=>{
  		return action => {
		    if (typeof action === 'function') {
		      return action(dispatch, getState, extraArgument);
		    }
		    return next(action);
		}
  	}
  };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
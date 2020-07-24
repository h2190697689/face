/**
* @desc useState实现,链表形式
*/
let firstWorkInProgressHook = {
	memoizedState:null,
	next:null,
};//第一个钩子
let workInProgressHook = firstWorkInProgressHook; //当前工作中的hook
  
function useState(initialState){
	//判断如果没有就初始化一个，有的话，当前指针向后移。
	let currentHook = workInProgressHook.next?workInProgressHook.next:{
		memoizedState:null,
		next:null,
	}

	function setState(newState){
		currentHook.memoizedState = newState;
		workInProgressHook = firstWorkInProgressHook; //重新渲染时，重置work
		render(); //重新渲染
	}

	if(workInProgressHook.next){ //工作中的hook如果存在next
		workInProgressHook = workInProgressHook.next; //往后移位。
	}else {
		workInProgressHook.next = currentHook; //如果当前工作的没有下一个要执行钩子，则给它挂上。
		workInProgressHook = currentHook
	}

	return [currentHook.memoizedState, setState]
}
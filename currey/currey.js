/* 柯里化  */

// function add(...args){
// 	const list = Array.prototype.slice.call(arguments);
// 	const fn = function(){
// 		list.push(...arguments);
// 		// console.log(list)
// 		return fn;
// 	}
// 	fn.valueOf = function(){
// 		return list.reduce((now,item)=> now+item)
// 	}
// 	return fn
// }

function add(...args) {

  // 将参数绑定到add上
  // 此时f其实还是add函数，但已经固定了一些参数，所以并不是原来的add函数
  // 用bind返回新函数以保证满足**柯里化保留参数**的特性
  var f = add.bind(null/*this不用绑定*/, ...args) 

  console.log(args);

  // 重新实现这个bound add函数的toString方法
  // f参与运算应该被当成args的和，与f自己再接收的参数无关
  // 考虑到lazy的特性，还是需要时再计算，但又没了缓存，每次用都会重新计算
  // 如果有需要，可以改成有缓存的版本
  f.toString = () => {
    return args.reduce((a, b) => a + b, 0)
  }

  return f
}

// 考虑到add可能直接被用于运算中，可以加上这句
// add.toString = () => 0
console.log(add(1)(2)(3) + 0)
// console.log(add(1, 2, 3)(4) + 0)
// console.log(add(1)(2)(3)(4)(5) + 0)
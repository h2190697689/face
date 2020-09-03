/**
 * @author hejiamin
 * @desc 退出循环
 * @date 2020/07/28
 */

var a = [1,2,3,4,5,6];

// for(let i in a){  
//     if(i == 3){  //因为数组是对象，index其实是字符串
//         return;
//     }
//     console.log(i)
// }

// for(let i in a),  for(let i=0;i<a.length;i++),  for(let item of a)   都可使用return, break, continue

// a.every(item=>{
//     if(item === 4){
//         return false
//     }
//     console.log(item);
//     return true
// })
// every 在返回 true 的情况下继续循环，返回 false 的情况下中断执行

/** forEach */
a.forEach(item=>{
    if(item === 3){
        return  // 无效；  break直接报错
    }
    console.log(item)
})


/* 方法 */
try {
    [1, 2, 3, 4, 5].forEach(function(item) {
      if (item=== 2) throw item;
      console.log(item);
    });
} catch (e) {}


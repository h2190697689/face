/* Set */


/* 基本使用 */
let s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
const value = 2;

// OK
// s.forEach(item=>{
//     console.log(item);
// })



// OK  index 不存在无法遍历
// for(let item of s){
//     console.log(item)
// }


/* API */

/* 操作方法 */
s.add(value)   // 添加数据,返回Set本身
s.delete(value)  // 删除某个值,返回booleam值
s.has(value);  // 判断是否有值
s.clear();   //清除所有成员
s.size  // 计算set长度

Array.from(s);   // Set 结构转为数组

/* 遍历方法 */  /* 键名，键值为同一个值 */
s.keys();   // 整个键名
s.values();  //  整个键值
s.entries();  // 整个对象
s.forEach((item,index)=> {})  // 遍历
for(let item of s){}



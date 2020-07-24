/**
 * WeakSet的成员只能是对象
 * 不可遍历
 */
const ws = new WeakSet();
const value = {age: 21};
ws.add({name:"hejiamin"});
console.log(ws);


const list = [[1,2],[3,4]];
const objList = [{name: "jk"},{age: 21}, ["path","url"]]
const copy = new WeakSet(objList);
console.log(copy);

// WeakSet中的对象都为弱引用，垃圾回收机制不考虑WeakSet对其中对象的引用；其他对象不再引用其中某一个对象时，垃圾机制默认开启

/* 操作方法 */
ws.add(value)   // 添加数据,返回Set本身
ws.delete(value)  // 删除某个值,返回booleam值
ws.has(value);  // 判断是否有值

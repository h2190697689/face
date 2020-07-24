/**
 * WeakMap只接受对象作为键名
 * 键名作为弱引用，其他对象对该键名没有引用便会触发垃圾回收
 * 没有遍历操作
 */

 const wm = new WeakMap();
 const key = {foo: 1};
 wm.set(key, "23");

const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);


 /* 操作方法 */
wm.set(key, "jfd")   // 添加数据,返回Set本身
wm.get(key)  // 删除某个值,返回booleam值
wm.has(key);  // 判断是否有值
wm.delete(key);  // 
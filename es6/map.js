/* map */
/*  解决对象键只能为字符串 */

const m = new Map();
const o = { p: "hello world"};

m.set(o, "content");

var a = new Map([["name",2]])  //构造方式
for(let value of a){
    console.log(value)
}


m.get(o);

m.has(o);
m.delete(o);
m.has(o);

/* 操作方法 */
m.size   // 返回键值对数
m.set("name","hejiamin")  // 设置键值
m.get("name")   // 获取值
m.has("name");  // 判断某个键是否在里面
m.delete("name");  // 删除某个键
m.clear();   // 删除所有成员

/* 遍历方法 */
m.keys();  // 所有键
m.values();  // 所有值
m.entries();  // 所有成员
m.forEach((value,key)=> {}) // 遍历
for(let [key, value] of m){} // 遍历

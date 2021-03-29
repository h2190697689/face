async function say(){
    const name = await Promise.resolve("min");
    console.log(name);
    const age = await Promise.resolve(23);
    console.log(age);
    return "hello";
}
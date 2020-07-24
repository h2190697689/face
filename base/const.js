// const a = 1;
// a.func=()=>{console.log("hello")}
// a.func();

// function test(){
//     Promise.resolve().then(()=>{
//         console.log(1);
//         test();
//     })
// }
// test();

function test(){
    setTimeout(()=>{
        console.log(2);
        test();
    }, 0)
}
test()
Promise.resolve().then(()=>{
    console.log(1)
    Promise.resolve().then(()=>{
        console.log(2)
    }).then(()=>{
        console.log(5)
    }).then(()=>{
        console.log(6)
    })
    console.log(3)
}).then(()=>{
    console.log(4)
}).then(()=>{
    console.log(7)
})

// async2 end  Promise   async1 end  pr
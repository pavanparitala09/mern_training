let futureAvialability = true;
let promiseObj = new Promise((fulfilled,rejected) =>{
    setTimeout(() => {
        if(futureAvialability === true)
            fulfilled("hi ,how are yoy")
        else 
            rejected("i will call you later")
    },5000)
})

promiseObj
    .then((message)=>console.log("fulfilled",message))//called when promise fulfilled
    .catch((error)=>console.log("rejected",error)) //called when promise rejected

let status = true;

let promiseObj2 = new Promise((fulfill,reject) => {
    setTimeout(() =>{
        if(status===true)
            fulfill("you have got 8+LPA")
        else
            reject("You failed to  get the 8LPA")
    },3000)
})

promiseObj2
.then((message) => console.log("Fulfilled :",message ))
.catch((error) => console.log("rejected ",message))
console.log("hi how are you");
let a;
let b = 10;
console.log(a);
console.log(b);
console.log(a+b);
let student = {sno:1,name:"pavan"}
console.log(student, typeof student)
let marks = [10,20,30,40];
console.log(typeof marks)
a = 10;
b = 20;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**b)
console.log(a/b)
console.log(a==b)
console.log(a===b)
console.log(2**3)


function sum(a,b) {
    let vr = a+b;
    return vr;
}
res = sum(a,b)
console.log(res)

function bigNumbreOfThreeNumbers(a,b,c){
    if(a>b && a>c){
        return a
    }
    if(b>a && b>c){
        return b
    }
    else 
        return c
}
console.log(bigNumbreOfThreeNumbers(5,4,9))

const evenOrOdd = (a) => a%2 == 0?  'even': "odd";

console.log(evenOrOdd(2))
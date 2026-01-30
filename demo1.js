let emp = {
    no:52,
    name:'PavanParitala'
}


emp.city = "HYD";
console.log(emp)
delete(emp.name)
console.log(emp)
emp.dfr = 4
Object.freeze(emp)
emp.dtr = 10;
console.log(emp)
console.log(Object.keys(emp))
console.log(Object.values(emp))

//Unpacking

let test = {
    a:10,
    b:3,
    c:5
}

//Unpacking Object(Destructuring)
let {a,b} = test;

console.log(a,b)
 
let student = {
    name:'Pavan',
    age:20,
    marks:[10,20,30],
    address:{
        city:'HYd',
        pincode:123456
    },
    getAvg:function(){
        let sum = 0
        for(let i of this.marks)
            sum +=i;
        return sum/this.marks.length
    }
}
console.log(student.getAvg())

//---------------------------------------------------------------------------------------

CallBack Function 
sending one function as an argument to another function is known call back function

function test1(a) {
    console.log(a())
}

test1( function(){
    return "123"
})

skills = [1,2,3,4]

skills.push(6);
console.log(skills)
skills.unshift(0);
console.log(skills)
splice(index,delete count,element)
skills.splice(1,0,5)
console.log(skills)
skills.splice(3,1)
console.log(skills)
 //--------------------------------------------------------------------------------------------

 let marks = [23,55,46,34,75];
 let results = marks.filter(element => element<50) 
 console.log(results)

 const res = (marks) => {
    let arr = []
    for(let i of marks){
        if(i<50)
            arr.push(i)
    }
    return arr
 }
 console.log(res(marks))

 let ans = marks.filter((element) => element>30 && element<90 )
 console.log(ans)

 let salaries = [100,200,300];

 let updates = salaries.map(ele => ele+50)

 console.log(updates)

 const sum = marks.reduce((accmulator,element) => accmulator+element)
 console.log(sum)

const small = marks.reduce((accmulator,element) => accmulator<element ? accmulator:element)
console.log(small) 

let student = [
    {sno:1,name:"Pavan",age:20},
    {sno:2,name:"shiva",age:12},
    {sno:3,name:"amruth",age:33},
    {sno:4,name:"yagnesh",age:25}
]
const resu = student.filter(studentobj => {
        if(studentobj.age >22)
            return studentobj
    })
 console.log(resu)

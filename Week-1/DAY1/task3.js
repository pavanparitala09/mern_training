let price = 1299;

if(price<500)
    console.log('Budget Course')

else if(price>1000)
    console.log('premiun course')

else
    console.log('standard course')
let marks = [10,23,45]

let sum = 0
for(let v of marks){
    sum +=v

}

console.log(sum)

//write a function that recives marks array and returns samllest array

marks = [1,2,3,4,5,6,7,8]
let min = marks[0];
const smallestNumber = (marks) => {
    
for(let a of marks)
    if(a<min)
        min = a;

return min
}
console.log(smallestNumber(marks))

let skills = ['react','java','js','python']
skillsName = 'java'

function findSkill(skills,skillsName){
    for(let v of skills)
        if(v === skillsName){
            return 'skill found'
            break;
        }
    return "skill not found"    
}

console.log(findSkill(skills,skillsName))


let employee = {
    empno:121,
    empname:'Pavan Paritala',
    age:20
}

console.log(employee.empname)
console.log(employee)

for( let v in employee)
    console.log(` ${v} is ${employee[v]}`)

//------------------------------------------------------------------------------------------------

let student = {
    name:'Pavan',
    rollNo:52,
    college:'Anurag University',
    city:'mdr'
}

let product = {
    name:'pen',
    brand:'unknown'
}

console.log(student)
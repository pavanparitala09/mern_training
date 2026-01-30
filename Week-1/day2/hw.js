const temperatures = [32, 35, 28, 40, 38, 30, 42];

const fil = temperatures.filter(element => element>35)
console.log(fil)
const celsiusToFahrenheit = temperatures.map(element => element+273)
console.log(celsiusToFahrenheit)
const avge = temperatures.reduce((acc,ele) => acc+ele)/temperatures.length
console.log(avge)
const find = temperatures.find(element => element> 40)
console.log(find)
const findIndex = temperatures.find(element => element === 40)
console.log(findIndex)

//--------------------------------------------------------------------------------------------------

//task - 2
const courses = ["javascript", "react", "node", "mongodb", "express"];

const filt = courses.filter(element => element.length>5)
console.log(filt)
const upperCase = courses.map(element => element.toUpperCase())
console.log(upperCase)
const single = courses.reduce((acc,ele) => acc+ " |"+ele )
console.log(single)
const findc = courses.find(ele => ele==="react") 
console.log(findc)
const findindex = courses.findIndex(ele => ele === "node")
console.log(findindex)

//----------------------------------------------------------------------------------------------

//Task-3

const marks = [78, 92, 35, 88, 40, 67];
const pass = marks.filter(ele => ele>=40)
console.log(pass)
const addMarks = marks.map(ele => ele+5)
console.log(addMarks)
const higestMarks = marks.reduce((acc,ele) => acc>ele?acc:ele)
console.log(higestMarks)
const findFirstmark = marks.find(ele => ele<40)
console.log(findFirstmark)
const ind = marks.findIndex(ele => ele=== 92)
console.log(ind)
//-----------------------------------------------------------------------------------------

//Task-4
console.log("ASSIGNMENT 2:")
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

const passs = students.filter(stuObj => stuObj.marks>=40)
console.log(passs)
const grade = students.map(stuObj =>{
    if(stuObj.marks>=90)
        stuObj.grade="A"
    else if(stuObj.marks<75 && stuObj.marks>=60)
        stuObj.grade = "B"
    else if(stuObj.marks<90 && stuObj.marks>=75)
        stuObj.grade = "C"
    else
        stuObj.grade = "D"
    return stuObj
})
console.log(grade)

const avg = students.reduce((sum,stuobj)=> sum+stuobj.marks,0)/students.length
console.log(avg)

const stu92 = students.find(stuobj => stuobj.marks===92)
console.log(stu92)

const kiranIndex = students.findIndex(stuObj => stuObj.name === "Kiran")
console.log(kiranIndex)

//------------------------------------------------------------------------------------------------------------------

    console.log("ASSIGNMENT 3:")
    // -------------
    // Employee Payroll Processor

    // You are building a salary processing module in a company HR app.

    // Test data:

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

const itDep = employees.filter(empObj => empObj.department === "IT")
console.log(itDep)

const salaryy = employees.map(empObj => empObj.salary+=empObj.salary/10)
console.log(salaryy)

const payout = employees.reduce((sum,empObj) => sum+empObj.salary,0)
console.log(payout)

const employeeWithSalary30000 = employees.find(empObj => empObj.salary === 30000)
console.log(employeeWithSalary30000)

const employeeNeha = employees.findIndex(empObj => empObj.name === "Neha")
console.log(employeeNeha)

//--------------------------------------------------------------------------------------------------------------------


console.log("ASSIGNMENT 4:") 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const sciFiMovie = movies.filter(movobj => movobj.genre === "Sci-Fi")
console.log(sciFiMovie)

const inception = movies.map(movie =>{
    if(movie.title === "Inception")
       console.log(`${movie.title} (${movie.rating})`)
})

const avgRating = movies.reduce((sum,movObj) => sum+movObj.rating)/movies.length
console.log(avgRating)

const findJoker = movies.find(movObj => movObj.title === "Joker")
console.log(findJoker)

const indexOfAvengers = movies.findIndex(movObj => movObj.title === "Avengers")
console.log(indexOfAvengers)

//-------------------------------------------------------------------------------------------------------------

console.log("ASSIGNMENT 5:") 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const creditedTranscations = transactions.filter(tranObj => tranObj.type === "credit")
console.log(creditedTranscations)

const transcationAmount = transactions.map(tranObj => tranObj.amount)
console.log(transcationAmount)

const balance = transactions.reduce((sum,tranObj) => {
    if(tranObj.type === "credit")
        sum+=tranObj.amount
    else
        sum-=tranObj.amount
    return sum
},0)
console.log(balance)

const firstDebitTransaction = transactions.find(tranObj => tranObj.type === "debit")
console.log(firstDebitTransaction)

const transactionWithAmount10000 = transactions.findIndex(tranObj => tranObj.amount === 10000)
console.log(transactionWithAmount10000)
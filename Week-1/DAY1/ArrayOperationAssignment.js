let isLoggedIn = true;
let IsProfileComplete = true;

if(isLoggedIn && IsProfileComplete)
    console.log(" Welcome Back")

else if (isLoggedIn && !IsProfileComplete)
    console.log("Please complete your profile")

else if(!isLoggedIn)
    console.log("please login")
//------------------------------------------------------------------------

let price = 1299;
//check the price and print course range
if (price < 500) console.log("Budget Course");
else if (price > 1000) console.log("premiun course");
else console.log("standard course");

let marks = [10, 23, 45];

let sum = 0;
//get sum of marks
for (let v of marks) {
  sum += v;
}
//print the sum of marks
console.log(sum);

//write a function that recives marks array and returns smallest array
marks = [1, 2, 3, 4, 5, 6, 7, 8];
let min = marks[0];
const smallestNumber = (marks) => {
  //find smallest marks
  for (let a of marks) if (a < min) min = a;

  return min;
};
//print the smalleast
console.log(smallestNumber(marks));

let skills = ["react", "java", "js", "python"];
skillsName = "java";

//find is skill present in skills array
function findSkill(skills, skillsName) {
  for (let v of skills)
    if (v === skillsName) {
      return "skill found";
      break;
    }
  //if not present
  return "skill not found";
}

//call the function and print the result
console.log(findSkill(skills, skillsName));

let employee = {
  empno: 121,
  empname: "Pavan Paritala",
  age: 20,
};

//get employee name
console.log(employee.empname);
//get all details of employee
console.log(employee);

for (let v in employee) console.log(` ${v} is ${employee[v]}`);

//------------------------------------------------------------------------------------------------
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true,
};

//Read and print the user’s name and email
console.log(user.name, user.email);

//Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";
console.log(user);

//Update role from "student" to "admin"
user.role = "admin";
console.log(user);

//Delete the isActive property
delete user.isActive;
console.log(user);

//Use Object.keys() to list all remaining fields
const keys = Object.keys(user);
console.log("Keys are:", keys);

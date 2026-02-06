const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
//print user name
console.log(user.name)
//print user email
console.log(user.email)
//add new attribute
user.lastLogin = "2026-01-01";
user.role = 'admin';
//delete isActive property
delete(user.isActive)
console.log("keys of the object user sre ;",Object.keys(user))

//---------------------------------------------------------------------------

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let sum = Object.values(marks)
console.log(sum)

//


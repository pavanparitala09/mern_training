class book{
    constructor(title, author, pages, isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }

    barrow(isAvailable){
        isAvailable=false;
    }
    returnBook(isAvailable){
        isAvailable=true;
    }
    getInfo() {
        console.log(`${this.title} by ${this.author} (${this.pages} pages)`)
    }
    isLongBook() {
        if(this.pages>300)
            console.log("true")
        else
            console.log("false")

    }
}

let b1 = new book("RRR","pavan",230,true)
b1.isLongBook();
b1.getInfo();

// -------------------------------------------------------------------------------------------------------
//ASSIGNMENT 1 ON DATES
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const day = ["sunday", "Monday", "Tuesday", "Wednesday", "Thuresday", "Friday", "Saturday"];
const date = new Date();
console.log(date.getFullYear())
console.log(months[date.getMonth()])
console.log(date.getDate(0))
console.log(day[date.getDay()])
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.toLocaleString())

let enrollmentDeadline = new Date("2026-01-20");
if(date>enrollmentDeadline) console.log("Enrollment Close")
else console.log("Enrollment Open")

const validateDate = new Date("2026-02-30")
if(validateDate.getDate()>31 || validateDate.getMonth()>12)
    console.log("valid Date")
else
    console.log("Niot a valid Date")

let dob = "2000-05-15";
let birth = new Date("2000-05-15")
//let age = date.getFullYear - dob
if(date.getMonth()<birth.getMonth())
console.log(date.getFullYear() - birth.getFullYear())
else
    console.log((date.getFullYear() - birth.getFullYear()))

//------------------------------------------------------------------------------------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
const activeUsers = users.filter(obj => obj.active === true)
console.log(activeUsers)
const namesOfActiveUsers = users.map(userObj => {
    if(userObj.active === true)
        console.log(userObj.name)
})


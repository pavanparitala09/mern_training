let isLoggedIn = true;
let IsProfileComplete = true;

if(isLoggedIn && IsProfileComplete)
    console.log(" Welcome Back")

else if (isLoggedIn && !IsProfileComplete)
    console.log("Please complete your profile")

else if(!isLoggedIn)
    console.log("please login")

import exp from "express";
import { usersApp } from "./API/userApi.js";
import { productApp } from "./API/productApi.js";
const app = exp();

//body paesing middleware

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use(exp.json());
app.use('/users-api',usersApp)
app.use('/products-api',productApp)

//let users = [];

// function middleWare(req,res,next){
//     console.log("middleware exicuted")
//     next()
//     //res.json({message:"response from middle ware"})
    
// }

// app.use(middleWare)

// app.get("/users",middleWare, (req, res) => {
//   res.json({ message: "users details", users });
// });


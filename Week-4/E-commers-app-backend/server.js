import express from "express";
 import exp from "express";
 import { userApp } from "./APIs/UserAPI.js";
 import { productApp } from "./APIs/ProductAPI.js";
 import { connect } from "mongoose";
 import mongoose from "mongoose";
 import cookieParser from "cookie-parser";
 const app = exp();
 const port = 3000;
 
 //database connection
 async function connectDB() {
   try {
     let res = await connect("mongodb://localhost:27017/E-Commers");
     console.log("DB connection success");
     //start server after db connection success
     app.listen(port, () => {
       console.log("Server is running on port", port);
     });
   } catch (err) {
     console.log("DB connection fail");
   }
 }
 //call the function
 connectDB();
 //body parser middleware
 app.use(exp.json());
 //add cookie-parser
 app.use(cookieParser())
 //calling user api
 app.use("/user-api", userApp);
 app.use("/product-api", productApp);
 
 function errorHandler(err, req, res, next) {
   res.json({ message: "error", reason: err.message });
 }
 
 app.use(errorHandler);
 
import exp from "express";
import { hash, compare } from "bcryptjs";
import { userModel} from "../models/UserModel.js";
import {productModel} from '../models/ProductModel.js'
import { authMiddleware } from "../middlewares/AuthMiddleware.js";
import jwt from "jsonwebtoken";
export const userApp = exp.Router();

//Register
userApp.post("/users", async (req, res) => {
  //get new user details from request
  let newUser = req.body;
  //run validator
  await new userModel(newUser).validate();
  //create user model
  let newUserModel = new userModel(newUser);
  //hash the password
  let hashedPassword = await hash(newUser.password, 10);
  //replace hashed password with original one
  newUserModel.password = hashedPassword;
  //save in db
  await newUserModel.save({validateBeforSave:false});
  //send response
  res.status(200).json({ Message: "user created", newUser });
});

//get all users
userApp.get("/users", authMiddleware, async (req, res) => {
  //read all the users
  let users = await userModel.find({}, { name: 1, email: 1, _id: 0 });
  //send response
  res.status(200).json({ message: "user details are", users });
});

userApp.post("/login", async (req, res) => {
  //get user detalils from req
  let { email, password } = req.body;
  // console.log(userEmail)
  // console.log(req.body)
  //find user in db
  let dbUser = await userModel.findOne({ email: email });
  //if user does not exist
  if (!dbUser)
    return res
      .status(404)
      .json({ message: `User with ${userEmail} does not exist` });
  //if user exist then compare password
  let status = compare(password, dbUser.password);
  //if password does not match
  if (!status) return res.status(404).json({ message: "Invalid password" });
  //if password match then create JWToken
  console.log(dbUser.email);
  let signedToken = jwt.sign(
    { name: dbUser.name, email: dbUser.email },
    "secrettoken",
    {
      expiresIn: "1h",
    },
  );
  //save jetoken in http cookie only
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  //send response
  res.status(200).json({ message: "Login successful" });
});

//cart
userApp.post("/cart", authMiddleware, (req, res) => {
  let { name, email } = req.user;
  console.log(name, email);
});

//updating user cart
userApp.put('/user-cart/userid/:uid/productid/:pid', async (req, res) => {
  let { uid,pid} = req.params;
  console.log("line79",req.params,uid)
  //check user
  let checkDBUser = await userModel.findById(uid)
  console.log("line 80",checkDBUser)
  if(!checkDBUser)
    return res.status(404).json({message:"user does not exist"})
  let checkProduct = await productModel.findById(pid)
   if(!checkProduct)
    return res.status(404).json({message:"Product does not exist"})
  //add item into user cart

let productExist = await userModel.find({_id:uid},{produt:pid})
console.log(productExist)
 if(!productExist){
   let modifiedCart = await userModel.findByIdAndUpdate(
    uid,
    {$push:{cart:{product:pid,quantity:1}}},
  {new:true}
  ).populate("cart.product")
    res.status(200).json({message:"item added sucessfully"})
 }

 //let b = uid.cart.qauntity;
 //console.log("line 102 b",b)
 let updatedCart = await userModel.findByIdAndUpdate(uid,
  {$inc:{cart:{quantity:1}}},
  {new:true}
 )
res.json({message:"ite exist"})

 
});

//read user by id
userApp.get('/users/:id', async(req,res) => {
  let userID = req.params.id;
  console.log(userID)
  let userDetails = await userModel.findById(userID).populate("cart.product")
  res.status(200).json({message:"user details are :",payload:userDetails})
})


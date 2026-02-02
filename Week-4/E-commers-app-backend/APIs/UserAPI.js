import exp from "express";
import { hash, compare } from "bcryptjs";
import { userModel } from "../models/UserModel.js";
import { authMiddleware } from "../middlewares/AuthMiddleware.js";
import jwt from "jsonwebtoken";
export const userApp = exp.Router();

userApp.post("/users", async (req, res) => {
    //get new user details from request
  let newUser = req.body;
  //create user model
  let newUserModel = new userModel(newUser);
  //hash the password
  let hashedPassword = await hash(newUser.password, 10);
  //replace hashed password with original one
  newUserModel.password = hashedPassword;
  //save in db
  await newUserModel.save();
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
  let { userEmail, password } = req.body;
  //find user in db
  let dbUser = await userModel.findOne({ email: userEmail });
  //if user does not exist
  if (!dbUser)
    return console.log({ message: `User with ${userEmail} does not exist` });
  //if user exist then compare password
  let status = compare(password, dbUser.password);
  //if password does not match
  if (!status) return res.status(404).json({ message: "Invalid password" });
  //if password match then create JWToken
  console.log(dbUser.email)
  let signedToken = jwt.sign({ name: dbUser.name,email:dbUser.email}, "secrettoken", {
    expiresIn: "1h",
  });
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
userApp.post('/cart',authMiddleware,(req,res) => {
    let {name,email} = req.user
    console.log(name,email)
})

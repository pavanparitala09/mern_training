import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/VerifyToken.js";
export const userApp = exp.Router();

//USER api routes

//middleware test route
userApp.get('/test',verifyToken,(req,res) => {
  res.status(200).json({message:"test route"})
})



//Read Users
userApp.get("/users", async (req, res) => {
  let userlist = await UserModel.find();
  //send response
  res.status(200).json({ Message: "Users list", payload: userlist });
});

//User authentication(login)
userApp.post("/auth", async (req, res) => {
  let userCred = req.body;
  console.log("line 19", userCred);

  let userOfDB = await UserModel.findOne({ username: userCred.username });
  console.log("line 22", userOfDB);
  if (!userOfDB) {
    return res.status(404).json({ message: "invalid username" });
  }
  let status = await compare(userCred.password, userOfDB.password);
  if (!status) return res.status(404).json({ message: "invalid password" });
  //create jwtoken and send to user
  let signedToken = jwt.sign({ username: userCred.username }, "secureToken", {
    expiresIn: 30,
  });
  //save the token in cookies
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  }),
    res.status(200).json({ message: "login Success", token: signedToken });
});

//get user by id
userApp.get("/users/:id", async (req, res) => {
  //get id from url
  let objId = req.params.id;
  console.log(objId);
  //find user in db
  let user = await UserModel.findById(objId);
  if (!user)
    return res
      .status(404)
      .json({ message: "User with that id does not exist" });
  else res.status(200).json({ message: "user details:", user });
});

userApp.post("/users", async (req, res) => {
  let newUser = req.body;
  console.log(newUser);
  let password = newUser.password;
  let hashedPassword = await hash(password, 10);
  newUser.password = hashedPassword;

  // Create new user document
  let newUserDoc = new UserModel(newUser);

  // Save in DB
  await newUserDoc.save();

  res.status(201).json({ message: "New user created", payload: newUserDoc });
});

userApp.put("/users/:id", async (req, res) => {
  //get obj id from url
  let objId = req.params.id;

  let modifiedContent = req.body;
  //send response
  let latestUser = await UserModel.findByIdAndUpdate(
    objId,
    { $set: { ...modifiedContent } },
    { new: true },
  );
  if (!latestUser)
    return res.status(404).json({ message: "User id does not exist" });

  res.status(200).json({ message: "user modified", latestUser });
});

userApp.delete("/users/:id", async (req, res) => {
  let objId = req.params.id;
  let deletedDoc = await UserModel.findByIdAndDelete(objId);
  if (!deletedDoc)
    return res.status(404).json({ message: "User id does not exist" });
  else res.status(200).json({ message: "user deleted", deletedDoc });
});

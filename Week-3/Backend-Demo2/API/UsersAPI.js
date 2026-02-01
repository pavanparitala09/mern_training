import exp from "express";
import { UserModel } from "../models/UserModel.js";
export const userApp = exp.Router();

//USER api routes

//Read Users
userApp.get("/users", async (req, res) => {
  let userlist = await UserModel.find();
  //send response
  res.status(200).json({ Message: "Users list", payload: userlist });
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

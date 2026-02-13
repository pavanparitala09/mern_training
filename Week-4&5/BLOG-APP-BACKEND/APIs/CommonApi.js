import exp from "express";
import { loginUser } from "../services/AuthService.js";
import { userModel } from "../models/UserModel.js";
import { hash, compare} from "bcrypt";

export const commonRoute = exp.Router();

//authenticate
commonRoute.post("/login", async (req, res) => {
  //call login function
  let results = await loginUser(req.body);

  if (!results.success) {
    return res.status(404).json({ message: results.message });
  }

  //save toke in http only cookie
  res.cookie("token", results.token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  //send res
  res.status(200).json({ message: "login success" });
});

//logout
commonRoute.post("/logout", (req, res) => {
  // Clear the cookie named 'token'
  res.clearCookie("token", {
    httpOnly: true, // Must match original  settings
    secure: false, // Must match original  settings
    sameSite: "lax", // Must match original  settings
  });

  res.status(200).json({ message: "Logged out successfully" });
});

commonRoute.post("/changepassword", async (req, res) => {
  //get details from body
  let { userId, oldPassword, newPassword } = req.body;

  //check if user exist or not
  let dbUser = await userModel.findById(userId);

  if (!dbUser) res.status(404).json({ message: "user does not exist" });

  //if user exist then check if password match
  let isMatch = await compare(oldPassword, dbUser.password);

  //if old password does not match
  if (!isMatch) res.status(401).json({ message: "invalid old password" });

  //change old password
  let newHashedPassword = await hash(newPassword, 10);

  //update the new password in db
  let updatedPassword = await userModel.findByIdAndUpdate(userId, {
    $set: { password: newHashedPassword },
  });
});

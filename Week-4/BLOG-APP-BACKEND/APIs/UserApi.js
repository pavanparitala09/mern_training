import exp from "express";
import { registerUser } from "./AuthenticateApi.js";
import { loginUser } from "./AuthenticateApi.js";
import Jwt from "jsonwebtoken";
export const userRoute = exp.Router();

userRoute.post("/register", async (req, res) => {
  //call register function
  let newUser = await registerUser(req.body);
  //send response
  res.status(201).json({ message: "new user created", payload: newUser });
});

//login
userRoute.post("/login", async (req, res) => {
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
  res.status(200).json({ message: "login sucess" });
});

import exp from "express";
import { adminValidationMiddleware } from "../middlewares/AdminValidation.js";
import { articleModel } from "../models/ArticleModel.js";
export const adminRoute = exp.Router();

//authenticate
adminRoute.post("/login", adminValidationMiddleware, (req, res) => {
  res.status(200).json({ message: "login success" });
});

//read all articles
adminRoute.get("/articles", adminValidationMiddleware, async (req, res) => {
  //get all article from db
  let articles = await articleModel.find();

  //send response
  res.status(200).json({ message: "article are :", payload: articles });
});
//block or unblock user roles

import exp from "express";
import { adminValidationMiddleware } from "../middlewares/AdminValidation.js";
import { articleModel } from "../models/ArticleModel.js";
import { userModel } from "../models/UserModel.js";
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

//block the user
adminRoute.post("/blockuser/:id", adminValidationMiddleware, async (req, res) => {
    //get user id from params
    let userId = req.params.userId;

    //check if user exist in db
    let dbUser = await userModel.findById(userId);

    //if user does not exist
    if (!dbUser) res.status(404).json({ message: "user does not exist" });

    //if user already blocked
    if (!dbUser.isActive)
      res.status(401).json({ message: "user already blocked" });

    //block the user
    let blockedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: { isActive: false },
      },
      { new: true },
    );
  },
);

//unblock the user
adminRoute.post("/unblock/:id", adminValidationMiddleware, async (req, res) => {
    //get user id from params
    let userId = req.params.userId;

    //check if user exist in db
    let dbUser = await userModel.findById(userId);

    //if user does not exist
    if (!dbUser) res.status(404).json({ message: "user does not exist" });

    //if user already unblocked
    if (dbUser.isActive)
      res.status(401).json({ message: "user already unblocked" });

    //block the user
    let blockedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: { isActive: true },
      },
      { new: true },
    );
  },
);

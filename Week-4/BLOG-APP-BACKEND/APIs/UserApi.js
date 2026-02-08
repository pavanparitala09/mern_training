import exp from "express";
import { registerUser } from "./AuthenticateApi.js";
import { loginUser } from "./AuthenticateApi.js";
import Jwt from "jsonwebtoken";
import { userValidationMiddleware } from "../middlewares/UserValidation.js";
import { articleModel } from "../models/ArticleModel.js";
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

// POST /articles/:id/comments
userRoute.post(
  "/articles/:id/comments",
  userValidationMiddleware,
  async (req, res) => {
    //get article id from params
    const { id } = req.params;

    //get comment from body
    const commentText = req.body.comment;

    //get user id from payload
    const userId = req.user.userId;

    //update article by adding comment
    const updatedArticle = await articleModel.findByIdAndUpdate(
      id,
      {
        $push: {
          comment: {
            user: userId,
            comment: commentText,
          },
        },
      },
      { new: true },
    );
    //.populate("comment.user"); //populate user details

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "comment added", payload: updatedArticle });
  },
);

//delete a comment
//(error is if comment id not present also it is giving positive message)
userRoute.post("/articles/:a_id/comments/:c_id",userValidationMiddleware,async (req, res) => {
    //get article id from params
    let articleId = req.params.a_id;

    //get comment id from params
    let commentId = req.params.c_id;

    //delete the comment from db 
    let deletedComment = await articleModel.findByIdAndUpdate(
      articleId,
      {
        $pull: { comment: { _id: commentId } },
      },
      { new: true },
    );

    if (!deletedComment) res.status(404).json({ message: "comment not found" });

    res
      .status(200)
      .json({ message: "comment deleted :", payload: deletedComment });
  },
);

import exp from "express";
import { articleModel } from "../models/ArticleModel.js";
import { authorValidationMiddleware } from "../middlewares/AuthorValidation.js";
export const authorRoute = exp.Router();
import mongoose from "mongoose";

//register
//authenticate
//create article
authorRoute.post("/articles", authorValidationMiddleware, async (req, res) => {
  let newArticle = req.body;

  //create new article model
  let newArticlemodel = await articleModel(newArticle);

  //save article in db
  await newArticlemodel.save();

  //send response
  res.status(201).json({ message: "new artical created", newArticlemodel });
});

//read article
authorRoute.get("/articles", authorValidationMiddleware, async (req, res) => {
  let userId = req.author.userId;
  // console.log(userId)

  let articles = await articleModel
    .find({ author: new mongoose.Types.ObjectId(userId) })
    .populate("author.user");

  //send response
  if (!articles) res.status(404).json({ message: "no article found" });

  res.status(200).json({ message: "Your article are :", payload: articles });
});
//edit article
authorRoute.put(
  "/articles/:id",
  authorValidationMiddleware,
  async (req, res) => {
    //get article id from params
    let articleId = req.params.id;

    //get author id from middleware
    console.log(req.author);
    let authorId = req.author.userId;

    let articleDetails = await articleModel.findById(articleId);

    console.log(articleDetails.author, authorId);
    //check if the article belongs to that user or not
    if (!articleDetails.author.equals(authorId))
      res.status(401).json({message:"you are not allowed to edit this article"})

    let updatedArticle = await articleModel.findByIdAndUpdate(articleId, req.body)
    res.status(201).json({message:"article edited sucessfully", payload:articleDetails})
  },
);
//delete (soft) article

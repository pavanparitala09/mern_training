import exp from "express";
import { registerUser } from "../services/AuthService.js";
import { loginUser } from "../services/AuthService.js";
import { articleModel } from "../models/ArticleModel.js";
import { authorValidationMiddleware } from "../middlewares/AuthorValidation.js";
import mongoose from "mongoose";

export const authorRoute = exp.Router();

//register
authorRoute.post("/register", async (req, res) => {
  //get author doc from request
  const authorObj = req.body;

  //call the registration function and set role to author
  let newAuthorObj = await registerUser({ ...authorObj, role: "AUTHOR" });

  //send response
  res.status(200).json({ message: "Author created:", payload: newAuthorObj });
});



//create article
authorRoute.post("/articles", authorValidationMiddleware, async (req, res) => {
  let newArticle = req.body;

  //create new article model
  let newArticlemodel = await articleModel(newArticle);

  //save article in db
  let createdArticle = await newArticlemodel.save();

  //send response
  res
    .status(201)
    .json({ message: "new artical created", payload: createdArticle });
});

//read article
authorRoute.get("/articles", authorValidationMiddleware, async (req, res) => {
  let authorId = req.author.userId;
  // console.log(userId)

  let articles = await articleModel
    .find({
      author: new mongoose.Types.ObjectId(authorId),
      isArticleActive: true,
    })
    .populate("author", "firstName lastName");

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
    let authorId = req.author.userId;

    let articleDetails = await articleModel.findById(articleId);

    //console.log(articleDetails.author, authorId);
    //check if the article belongs to that user or not
    if (!articleDetails.author.equals(authorId))
      res
        .status(401)
        .json({ message: "you are not allowed to edit this article" });

    let updatedArticle = await articleModel.findByIdAndUpdate(
      articleId,
      req.body,
    );
    res
      .status(201)
      .json({ message: "article edited sucessfully", payload: articleDetails });
  },
);
//delete (soft) article

authorRoute.post(
  "/delete/:id",
  authorValidationMiddleware,
  async (req, res) => {
    let articleId = req.params.id;

    //get author id from jwt payload
    let authorId = req.author.userId;

    //find article
    let articleDetails = await articleModel.findById(articleId);

    //if article not found
    if (!articleDetails)
      return res.status(404).json({ message: "article not found" });

    //check if the article belongs to that user or not
    if (articleDetails.author.toString() != authorId)
      res
        .status(401)
        .json({ message: "you are not allowed to delete this article" });

    //soft delete the article
    let deletedArticle = await articleModel
      .findByIdAndUpdate(
        articleId,
        {
          $set: { isArticleActive: false },
        },
        { new: true },
      )
      .populate("author", "firstName lastName");

    //send res
    res.status(200).json({ message: "article deleted", deletedArticle });
  },
);

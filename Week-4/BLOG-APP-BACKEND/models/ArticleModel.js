import { Schema, model } from "mongoose";

//user comment schema
const userCommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  comment: {
    type: String,
  },
});

//author schema

const articleSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: [true, "Author id is required"],
    },
    title: {
      type: String,
      required: [true, "title is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    content: {
      type: String,
      required: [true, "content is required"],
    },
    comment: [userCommentSchema],
    isArticleActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: "throw",
    versiomKey: false,
  },
);

export const articleModel = new model("article",articleSchema)

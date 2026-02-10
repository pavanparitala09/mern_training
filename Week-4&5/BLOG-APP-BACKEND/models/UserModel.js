import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    middleName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    profileImageUrl: {
      type: String,
    },
    role: {
      type: String,
      enum: ["AUTHOR", "USER", "ADMIN"],
      required: [true, "{value} is an invalid role"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: "throw",
    versionKey: false,
  },
);

export const userModel = new model("user", userSchema);

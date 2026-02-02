import { Schema, model } from "mongoose";

//create User schema (username,password,age)
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "User name is required"],
    // minLength: [3, "Minimun length should be 3"],
    // maxLength: [15, "Max length exceeded"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    // minLength: [4, "Minimun length should be 3"],
    // maxLength: [100, "Max length exceeded"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Age should be above 18"],
    max: [25, "Age sholud be less than 25"],
  },
},{
  strict:"throw"
});

//Create user model with that schema
export const UserModel = model("user", userSchema);

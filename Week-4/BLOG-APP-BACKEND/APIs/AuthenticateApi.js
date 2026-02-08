import { userModel } from "../models/UserModel.js";
import { compare, hash } from "bcrypt";
import Jwt from "jsonwebtoken";

export async function registerUser(userData) {
  // create model instance
  const newUser = new userModel(userData);

  // validate input
  await newUser.validate();

  // hash password
  newUser.password = await hash(newUser.password, 10);

  // save to DB
  await newUser.save({ validateBeforeSave: false });

  return newUser;
}

export async function loginUser(loginDetails) {
  const { email, password } = loginDetails;

  // find user
  const dbUser = await userModel.findOne({ email: email });
  if (!dbUser) {
    return {
      success: false,
      message: "Invalid email",
    };
  }

  // compare password
  const isMatch = await compare(password, dbUser.password);
  if (!isMatch) {
    return {
      success: false,
      message: "Invalid password",
    };
  }

  //create jwt token
  let signedToken = Jwt.sign(
    { name: dbUser.name, role: dbUser.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1hr",
    },
  );
 
  //return success status
  return {
    success: true,
    user: dbUser,
    token:signedToken
  };
}

import { userModel } from "../models/UserModel.js";
import { compare,hash} from "bcrypt";
import Jwt from "jsonwebtoken";

export async function registerUser(userData) {
  // create model instance
  const userDoc = new userModel(userData);

  // validate input
  await userDoc.validate();

  // hash password
  userDoc.password = await hash(userDoc.password, 10);

  // save to DB
  await userDoc.save({ validateBeforeSave: false });

  //convert document to object
  const newUserObj = userDoc.toObject()

  //delete password from object
   delete(newUserObj.password)

  return newUserObj;
}

//function for login
export async function loginUser(loginDetails) {
  const { email, password } = loginDetails;

  // find user
  const dbUser = await userModel.findOne({ email: email });
  
  //check user exist or not in db
  if (!dbUser) {
    return {
      success: false,
      message: "Invalid email",
    };
  }

  //check is user active or not
  if(!dbUser.isActive){
   return {
      success: false,
      message: "user blocked",
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
    { userId: dbUser._id, role: dbUser.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1hr",
    },
  );

  //return success status
  return {
    success: true,
    user: dbUser,
    token: signedToken,
  };
}

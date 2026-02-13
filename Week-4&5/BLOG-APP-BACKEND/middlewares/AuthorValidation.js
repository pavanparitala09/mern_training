import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
export function authorValidationMiddleware(req, res, next) {
  //get token from cookies
  let token = req.cookies.token;

  //decod the token
  let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  //return payload
  req.author = decodedToken;

  //check if the user is author or not
  if (decodedToken.role != "AUTHOR")
    return res.status(500).json({ message: "only author can access to this page" });

  //go to next step
  next();
}

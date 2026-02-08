import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
export function authorValidationMiddleware(req, res, next) {
  //get token from cookies
  let token = req.cookies.token;

  //decod the token
  let decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decodedToken);
  req.user = decodedToken;
  if (decodedToken.role != "AUTHOR")
    return res.status(500).json({ message: "User can not publish article" });

  next();
}

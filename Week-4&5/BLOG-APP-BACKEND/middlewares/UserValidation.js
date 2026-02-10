import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export function userValidationMiddleware(req, res, next) {
  //get jwt token from cookie
  let token = req.cookies.token;

  //check the token
  let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  req.user = decodedToken;

  //check user or not
  if (decodedToken.role != "USER")
    return res.status(403).json({ message: "server error from backend" });

  next();
}

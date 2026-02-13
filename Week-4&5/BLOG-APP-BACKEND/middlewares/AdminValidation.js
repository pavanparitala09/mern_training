import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
export function adminValidationMiddleware(req, res, next) {
  //get token from cookies
  let token = req.cookies.token;

  //decod the token
  let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  //return payload
  req.author = decodedToken;

  //check if the user is admin or not
  if (decodedToken.role != "ADMIN")
    return res.status(500).json({ message: "only admin can access to this page" });

  //go to next step
  next();
}

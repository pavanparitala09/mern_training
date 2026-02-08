import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
export function authMiddleware(req, res, next) {
  let token = req.cookies.token;
  //if there is no token
  if (!token) return res.status(401).josn({ message: "Unauthorised user" });
  //check the jwtoken
  let decodedToken = jwt.verify(token, "secrettoken");
  //console.log("payload :", decodedToken);
    //if jwtoken doesnot matct
  if (!decodedToken)
    return res.status(403).josn({ message: "Invalid or expired token" });
  // attach payload to request object
  console.log(decodedToken)
  req.user = decodedToken;
  next();
}

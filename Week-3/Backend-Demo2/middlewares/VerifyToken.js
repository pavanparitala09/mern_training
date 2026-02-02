import jwt from "jsonwebtoken";
export function verifyToken(req, res, next) {
  //Token verificatin logic
console.log("line 4",req.cookie)
  //1.get the token from request
  let signedToken = req.cookies.token; 
  //2.verify token
  if(!signedToken)
    res.status(401).json({message:"please login"})
  let decodedToken = jwt.verify(signedToken,'secureToken')
console.log("line 11",decodedToken)
}

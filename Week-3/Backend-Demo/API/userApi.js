import exp from 'express'
export const usersApp = exp.Router()//creating mini express

let users=[]
usersApp.get('/users',(req,res) => {
  res.status(200).json({message:"Users details are",users})
})
usersApp.post('/user', (req, res) => {
  let newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: "new user created", newUser });
});

//updating  user details
usersApp.put("/user/id", (req, res) => {
  let details = req.body;
  let id = req.body.id;
  console.log(details);
  let userindex = users.findIndex((user) => user.id === id);

  if (userindex === -1)
    return res.status(404).json({ message: "user not found" });
  else {
    users.splice(userindex, 1, req.body);
    res.status(200).json({ message: "user details updated", details });
  }
})

usersApp.get("/user/:id", (req,res) => {
    let id = Number(req.params.id)
    let user = users.find()
})

usersApp.delete("/user/:id", (req, res) => {
  let id = Number(req.params.id);//params will return string by default
  let userindex = users.findIndex((user) => user.id === id);
  if (userindex === -1)
    return res.status(404).json({ message: "user not found" });
  else {
    let deletedUser = users.splice(userindex, 1);
    res.status(200).json({ message: "user details deleted", deletedUser });
  }
})

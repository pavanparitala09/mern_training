import exp from 'express';
const app = exp();

app.listen(3000,() => {
    console.log("server is running");
})
let id = 52;
app.get('/', (req,res) =>{
    res.send("get request created")
})
app.post('/user',(req,res) => {
    res.json({message:"this is response from post"})
})
app.put('/user/id',(req,res) => {
    res.json({message:`response from put id is ${id}`})
})
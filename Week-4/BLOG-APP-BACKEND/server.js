import exp from 'express';
import {connect} from 'mongoose';
import {config} from 'dotenv'
import cookieParser from 'cookie-parser';
import { userRoute } from './APIs/UserApi.js';
import { adminRoute } from './APIs/AdminApi.js';
import { authorRoute } from './APIs/AuthorApi.js';


config()//process.env
const app = exp()


//connect db
const connectdb = async() =>{
    try{
        //connect to db
        await connect(process.env.DB_URL)
        console.log("db connected")
        //assign port and start server
        app.listen(process.env.PORT,() => {
            console.log("Server is running on",process.env.PORT)
        })

    }
    catch(err){
        console.log("error occured during db connection :",err)
    }
}
//call the function
connectdb()
//body parser middleware
app.use(exp.json())
//add cookie parser
app.use(cookieParser());

app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)
//error handeling middleware
 function errorHandler(err, req, res, next) {
   res.json({ message: "error", reason: err.message });
 }
 
 app.use(errorHandler);
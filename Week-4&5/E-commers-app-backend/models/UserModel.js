import { Schema, model } from "mongoose";

//create cart schema
// const cartSchema = new Schema({
//     product:{
//         type:Schema.Types.ObjectId,
//         ref:'product'  //name of product model
//     }
// })

//product quantity
const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product' , //name of product model
    },
    quantity:{
            type:Number
        }
})

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"user name is require"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password require"]
    },
    cart:{
        type:[cartSchema]
    }
})

export const userModel = new model("user",userSchema)

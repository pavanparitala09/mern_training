import { Schema, model } from "mongoose";

//create cart schema
const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product'  //name of product model
    }
})

const userSchema = new Schema({
    name:{
        type:String,
        require:[true,"user name is require"]
    },
    email:{
        type:String,
        require:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"password require"]
    },
    cart:{
        type:cartSchema
    }
})

export const userModel = new model("user",userSchema)

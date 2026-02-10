import { Schema,model } from "mongoose";

let productSchema = new Schema({
    productname:{
        type:String,
        required:[true,"product name is require"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"]

    },
    brand:{
        type:String,
        required:[true,"Brand is require"]

    }

})

export const productModel = new model("product",productSchema)
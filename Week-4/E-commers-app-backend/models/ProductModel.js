import { Schema,model } from "mongoose";

let productSchema = new Schema({
    productname:{
        type:String,
        require:[true,"product name is require"]
    },
    price:{
        type:Number,
        require:[true,"Price is required"]

    },
    brand:{
        type:String,
        require:[true,"Brand is require"]

    }

})

export let productModel = new model("product",productSchema)
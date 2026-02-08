import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    require: [true, "Product name is required"],
    minLength: [3, "Minimum length is 3"],
    maxLength: [20, "Max length is 20"],
  },
  price: {
    type: Number,
    require: [true, "Price is required"],
  },
  model: {
    type: String,
    minLength: [3, "Minimum length is 3"],
    maxLength: [20, "Max length is 20"],
  },
});

//export ProductModel with schema
export const ProductModel = model("product", productSchema);

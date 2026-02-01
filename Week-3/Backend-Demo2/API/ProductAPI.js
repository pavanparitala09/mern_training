import exp from "express";
import { ProductModel } from "../models/ProductModel.js";

export const productApp = exp.Router();

//Product api routes

productApp.get("/products", async (req, res) => {
  //Get all product details from db
  let productlist = await ProductModel.find();
  //send response
  res
    .status(200)
    .json({ Message: "list of products are", payload: productlist });
});

//add new product
productApp.post("/products", async (req, res) => {
  //Get product details
  let newProduct = req.body;
  //Create new ProductModel
  let newProductdoc = new ProductModel(newProduct);
  //Save model
  await newProductdoc.save();
  //send response
  res
    .status(200)
    .json({ message: "Product added successfully", newProductdoc });
});

//get product by id
productApp.get("/products/:id", async (req, res) => {
  let objId = req.params.id;
  let productDetails = await ProductModel.findById(objId);
  if (!productDetails)
    return res.status(404).json({ message: "product details not found" });
  else res.status(200).json({ message: "Product details are", productDetails });
});

//update product details by id
productApp.put("/products/:id", async (req, res) => {
  //get objId from url
  let objId = req.params.id;
  //get modified content for req
  let modifiedProduct = req.body;
  //update product details in db
  let updatedProduct = await ProductModel.findByIdAndUpdate(
    objId,
    { $set: { modifiedProduct } },
    { new: true },
  );
  if (!updatedProduct)
    return res.status(404).json({ message: "Product Id not found" });
  else
    res
      .status(200)
      .json({ message: "Product details updated", updatedProduct });
});

productApp.delete("/products/:id", async (req, res) => {
  //get obj id from params
  let objId = req.params.id;
  console.log(objId);
  //delete obj from db
  let deletedObj = await ProductModel.findByIdAndDelete(objId);
  //send res
  if (!deletedObj)
    return res.status(404).json({ message: "Product Id not found" });
  else res.status(200).json({ message: "product obj deleted", deletedObj });
});

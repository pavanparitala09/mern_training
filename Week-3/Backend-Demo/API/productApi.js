import exp from 'express'
export const productApp = exp.Router()//creating mini express

let Products = [];

//return all the product details
productApp.get('/products',(req,res) => {
    res.status(200).json({message:"Product details are",Products})
})

//insert new product details
productApp.post('/products',(req,res) =>{
    let productDetails = req.body;
    Products.push(productDetails)
    res.status(200).json({message:"Product added Sucessfully",productDetails})
})

//Get specific product details by id
productApp.get('/product/:id',(req,res) => {
    let id = Number(req.params.id);
    console.log(id)
    let productDetails = Products.find(product => product.productID === id)
    console.log(Products)
    console.log(productDetails)
    if(!productDetails)
        res.status(404).json({message:"Product details not found"})
    else
        res.status(200).json({message:"Product details are",productDetails})
})

//delete specific product by id
productApp.delete('/products/:id',(req,res) => {
    let id = Number(req.params.id)
    let productIndex = Products.findIndex(product => product.productID === id)
    if(productIndex === -1)
        return res.status(404).json({message:"Product details not found"})
    else{
        let deletedRecord = Products.splice(productIndex,1)
        res.status(200).json({message:"Product details deleted",deletedRecord})
    }
})

//update specific product by id
productApp.put('/products/id',(req,res) => {
    let id = req.body.productID;
  console.log(id);
  let productindex = Products.findIndex((product) => product.productID === id);

  if (productindex === -1)
    return res.status(404).json({ message: "user not found" });
  else {
    let updatedDetails = Products.splice(productindex, 1, req.body);
    res.status(200).json({ message: "user details updated",updatedDetails});
  }
})
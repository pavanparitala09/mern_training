import express from 'express'
import {productModel} from '../models/ProductModel.js'
import { model } from 'mongoose'

export const productApp = express.Router()
//app.use(express.json());
productApp.post('/products',async (req,res) =>{
    console.log(req.body)
    let newProduct = req.body
    let newProductModel = new productModel(newProduct)
    await newProductModel.save()
    res.status(200).json({Message:"product added successfully"})
})
import express from 'express'
import {productModel} from '../models/ProductModel.js'
import { model } from 'mongoose'

export const productApp = express.Router()

productApp.post('/products',async (req,res) =>{
    let newProduct = req.body
    console.log(newProduct)
    let newProductModel = new productModel(newProduct)
    await newProductModel.save()
    res.status(200).json({Message:"product added successfully"})
})
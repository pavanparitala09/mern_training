import exp from 'express'
import { articleModel } from '../models/ArticleModel.js';
import { authorValidationMiddleware } from '../middlewares/AuthorValidation.js';
export const authorRoute = exp.Router()

//register
//authenticate
//create article
authorRoute.post('/articles',authorValidationMiddleware, async(req,res) =>{
    let newArticle = req.body;

    //create new article model
    let newArticlemodel = await articleModel(newArticle)

    //save article in db
    await newArticlemodel.save()

    //send response
    res.status(201).json({message:"new artical created",newArticlemodel})

})

//read article
authorRoute.get('/articles',authorValidationMiddleware, (req,res) => {
    let email = req.user.role
    console.log(email) 
})
//edit article
//delete (soft) article

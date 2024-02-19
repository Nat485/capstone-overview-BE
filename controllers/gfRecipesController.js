//an endpoint router to the api

const express = require("express")
const gfRecipes = express.Router()
const {nameCheck} = require("../middleware/nameValidation.js")

//this is the start of the endpoint
gfRecipes.get("/", (req, res) => {
    res.status(200).json({message:"GF recipes homepage"})

})
//adding the id for the items that will exist in the website

gfRecipes.get("/:recipeID",(req, res) => {
    const recipeID = req.params.recipeID
    
    console.log(Number(recipeID))
    if(Number(recipeID)){
        res.status(200).json({message: recipeID})
    }
    else{
        res.status(404).json({
            error : "id must be numeric value"
        })
    }})

    gfRecipes.post("/",nameCheck, (req, res)=> {
    const body = req.body
        res.status(200).json({message: body})
})



    



//the req is an object; it is dissecting all of the different urls



module.exports = gfRecipes
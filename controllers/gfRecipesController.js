//an endpoint router to the api

const express = require("express")

const gfRecipes = express.Router()

const {nameCheck} = require("../middleware/nameValidation.js")

const {getAllRecipes, deleteRecipe, getOneRecipe, addRecipe, updateGfRecipes} = require("../query/recipe.js")



//this is the start of the endpoint; await this response is called.
gfRecipes.get("/", async (req, res) => {
    const allRecipes = await getAllRecipes() 
    res.status(200).json(allRecipes)

})
//adding the id for the items that will exist in the website

 gfRecipes.get("/:recipeID", async (req, res) => {
    const recipeID = req.params.recipeID 
    
    
    if(Number(recipeID)){
        const oneRecipe = await getOneRecipe(recipeID)//whatever is stored is being returned as one object
        res.status(200).json(oneRecipe)
        
    }
    else{
        res.status(404).json({
            error : "id must be numeric value"
        })
    }})

    gfRecipes.post("/", async (req, res)=> {
    const body = req.body 
    const newRecipe = await addRecipe(body)

        res.status(200).json({message: newRecipe}) //maybe add a try catch error code for this. 
})

gfRecipes.put("/:recipeID", async (req, res) => {   //add colon and the ID is a place holder 
    const { recipeID } = req.params;

    const updatedRecipe = await(updateGfRecipes (recipeID,req.body))
    
    res.status(200).json({ updatedRecipe});
})

gfRecipes.delete("/:recipeID", async(req, res) => {
    const recipeID = req.params.recipeID;

    if(Number(recipeID)){
        const deletedRecipe = await deleteRecipe(recipeID);
//only this if will run if the first if is truthy
        
        if(deletedRecipe.id){
            res.status(200).json(deletedRecipe);
        }
        else{
            res.status(500).json(deletedRecipe);
        }
        
        
//this will run next if the first if is falsey
   
    
    }else{
        res.status(404).json({
            error : "Recipe ID must be  a numeric number"
        })
    }})




    



//the req is an object; it is dissecting all of the different urls



module.exports = gfRecipes
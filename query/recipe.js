const db = require("../db/dbConfig.js")

const getAllRecipes = async () => {
    try{
        const allRecipes = await db.any('SELECT * FROM recipes');
            return allRecipes
    
    }catch (error) {
        return error
    }
}
const getOneRecipe = async (recipeValue) => {
        try {
            db.one(arg1, arg2)
            const oneRecipe = await db.one('SELECT * FROM recipes WHERE id=$1',recipeValue)
       
            return oneRecipe
       
        } catch (error) {
            return error
        }
}



const updateGfRecipes = async (recipeValue,recipeObj)=> {
/*id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
creation_date INT,
vegan BOOLEAN
recipe_type TEXT 
*/

try {
    const updateGfRecipes = await db.one('UPDATE recipes SET title=$1, creation_date=$2, vegan=$3, recipe_type=$4 WHERE id=$5 RETURNING *', [
        body.recipe_name,
        body.creation_date,
        body.vegan,
        body.recipe_type,
        recipeValue
    ])

    return updateGfRecipes

    
} catch (error) {
return error 

{

const deleteRecipe = async (recipeValue) => {
try {
    
const deletedRecipe = db.one('DELETE FROM gfRecipes WHERE id=$1 RETURNING *', arg2)

    return deletedRecipe
} catch (error) {
    return error
}
}

}}};


module.exports = {
    getAllRecipes,
    getOneRecipe,
    updateGfRecipes,
    deleteRecipe

};

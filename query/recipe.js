const db = require("../db/dbConfig.js")

const getAllRecipes = async () => {
    try{
        const allRecipes = await db.any('SELECT * FROM recipes');
           return allRecipes
   // console.log('try')
   
    }catch (error) {
        console.log('catch')
        return error
    }
}
const getOneRecipe = async (recipeValue) => {
        try {
           // db.one(arg1, arg2)
            const oneRecipe = await db.one('SELECT * FROM recipes WHERE id=$1',recipeValue)
       
            return oneRecipe
       
        } catch (error) {
            return error
        }
}



const updateGfRecipes = async (recipeValue, recipeObj)=> {
/*id SERIAL PRIMARY KEY,
recipe_name TEXT NOT NULL,
creation_date INT,
vegan BOOLEAN
recipe_type TEXT 
*/

try {
    const updateGfRecipes = await db.one('UPDATE recipes SET recipe_name=$1, creation_date=$2, vegan=$3, recipe_type=$4 WHERE id=$5 RETURNING *', [
        recipeObj.recipe_name,
        recipeObj.creation_date,
        recipeObj.vegan,
        recipeObj.recipe_type,
        recipeValue
    ])

    return updateGfRecipes

    
} catch (error) {
return error 

}}

const deleteRecipe = async (recipeValue) => {
try {
    
const deletedRecipe = db.one('DELETE FROM recipes WHERE id=$1 RETURNING *', recipeValue)

    return deletedRecipe
} catch (error) {
    return error
}
}
//adding a new recipe 

const addRecipe = async (recipeValue) => {
    try {
        const newRecipe = await db.one('INSERT INTO recipes (recipe_name, creation_date, vegan, recipe_type) VALUES($1,$2,$3,$4)RETURNING *',[
        recipeValue.recipe_name,
        recipeValue.creation_date,
        recipeValue.vegan,
        recipeValue.recipe_type
       
        ])

        return newRecipe

    } catch (error) {
       return error 
    }
}

module.exports = {
    getAllRecipes,
    getOneRecipe,
    updateGfRecipes,
    deleteRecipe,
    addRecipe


};

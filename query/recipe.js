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




module.exports = {
    getAllRecipes,
    getOneRecipe

}
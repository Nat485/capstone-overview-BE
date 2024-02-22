const db = require("../db/dbConfig.js")

const getAllRecipes = async () => {
    try{
        const allRecipes = await db.any('SELECT * FROM recipes')
            return allRecipes
    
    }catch (error) {
        return error
    }
}

module.exports = {
    getAllRecipes
}
//an endpoint router to the api

const express = require("express")
const gfRecipes = express.Router()

//this is the start of the endpoint
gfRecipes.get("/", (req, res) => {
    res.status(200).json({message:"GF recipes homepage"})

})

module.exports = gfRecipes
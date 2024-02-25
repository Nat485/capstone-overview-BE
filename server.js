//Our entry  point to our app

const app = require("./app.js") //importing into this file, we can app the listen method

require("dotenv").config()

const PORT = process.env.PORT


app.listen(PORT,() => {
    console.log(`Listening on ${PORT}`)

}); //this is the local host to check on the backend
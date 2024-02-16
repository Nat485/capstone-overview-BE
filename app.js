const express = require("express")
const app = express()
const cors = require("cors")
//middleware any route that will run the functionality
app.use(express.json())
    //every single route will run 
app.use(cors()) //running a method to pass a request

app.get("/", (req, res) => {
    res.status(200).send("Test backend server")
  //any middleware can be added here and as many as you want

})
//If it wasn't defined, send error. 
app.get("*", (req, res) => {
    res.status(404).json({
        Error: "Page not found"
    })
})




module.exports = app //export this instance of express so we can use it elsewhere
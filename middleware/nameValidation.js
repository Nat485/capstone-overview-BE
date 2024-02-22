//this is to prevent the break in the database.
//split in the space empty string instead of character
function nameCheck (req, res, next) {
    const name = req.body.name
if(typeof name === "string") {
    const nameArr = name.split(" ") 

    const firstName = nameArr[0]

    const secondName = nameArr[1]

    const thirdName = nameArr[2]

    const firstNameRecipe = firstName.charAt(0).toUpperCase()

    const secondNameRecipe = secondName.charAt(0).toUpperCase()

    const thirdNameRecipe = thirdName.charAt(0).toUpperCase()

    const restOfFirstName = firstName.slice(1).toLowerCase()

    const restOfSecondName = secondName.slice(1).toLowerCase()

    const restOfThirdName = thirdName.slice(1).toLowerCase()

    const changedFirstName = `${firstNameRecipe}${restOfFirstName}`

    const changedSecondName = `${secondNameRecipe}${restOfSecondName}`

    const changedThirdName = `${thirdNameRecipe}${restOfThirdName}`

    req.body.name = `${changedFirstName} ${changedSecondName} ${changedThirdName}` //updated value in the body 

    next();       //it needs direction for the middleware to move on to the next task

}else {
    res.status(404).json({
        Error: "name must be a string"
    })
}
}

module.exports = {
    nameCheck
}


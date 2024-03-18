//this is to prevent the break in the database.
//split in the space empty string instead of character


function nameCheck(req, res, next) {
    const name = req.body.recipe_name;

    if (typeof name !== "string") {
        return res.status(404).json({
            Error: "Name must be a string"
        });
    }

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };

    const formattedName = name.split(" ").map(capitalizeFirstLetter).join(" ");

    req.body.name = formattedName;
    next();
}

module.exports = {
    nameCheck
};

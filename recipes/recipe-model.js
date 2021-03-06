const db = require("../data/db-config")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes(){
    return db("recipes");
}

function getShoppingList(recipe_id){
    return db("recipe_ingredients").where({ recipe_id });
}

function getInstructions(recipe_id){
    return db("recipe_steps").where({ recipe_id });
}
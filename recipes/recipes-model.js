const db = require("../data/db");
function getRecipes() {
  return db("recipes");
}
function getShoppingList(id) {
  return db("recipes_ingredients AS r")
    .select(["r.name", "r.recipe_id", "r.id as recipes_ingredients_id"])
    .join("ingredients AS i", "r.ingredient_id", "i.id")
    .where({ recipe_id: id });
}
module.exports = { getRecipes, getShoppingList };

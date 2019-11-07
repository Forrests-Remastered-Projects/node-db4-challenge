exports.seed = function(knex) {
  return knex("recipes_ingredients")
    .truncate()
    .then(() => knex("ingredients").truncate())
    .then(() => knex("recipes").truncate())
    .then(() => {
      return knex("recipes").insert([
        { id: 1, title: "Coconut Cream Pie" },
        { id: 2, title: "Red Velvet Cake" },
        { id: 3, title: "Blueberry Muffins" }
      ]);
    })
    .then(() => {
      return knex("ingredients").insert([
        { id: 1, name: "Coconut Shavings", quantity: "30" },
        { id: 2, name: " Cups of Cream", quantity: "2" },
        { id: 3, name: "Cups of Flour", quantity: "4" },
        { id: 4, name: "Tablespoons of Red Velvet Frosting", quantity: "5" },
        { id: 5, name: "Ounces of Batter", quantity: "2" },
        { id: 6, name: "Blueberries", quantity: "16" },
        { id: 7, name: "Eggs", quantity: "2" },
        { id: 8, name: "Sticks of Butter", quantity: "3" }
      ]);
    })
    .then(() => {
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1 },
        { recipe_id: 1, ingredient_id: 2 },
        { recipe_id: 1, ingredient_id: 3 },
        { recipe_id: 1, ingredient_id: 8 },
        { recipe_id: 2, ingredient_id: 3 },
        { recipe_id: 2, ingredient_id: 4 },
        { recipe_id: 2, ingredient_id: 5 },
        { recipe_id: 2, ingredient_id: 7 },
        { recipe_id: 3, ingredient_id: 3 },
        { recipe_id: 3, ingredient_id: 6 },
        { recipe_id: 3, ingredient_id: 8 }
      ]);
    });
};

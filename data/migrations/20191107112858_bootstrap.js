exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("title").notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("recipe_id")
        .inTable("recipes_ingredients");
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients");
      tbl.integer("quantity").notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl.integer("step_number").notNullable();
      tbl.string("instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes");
};

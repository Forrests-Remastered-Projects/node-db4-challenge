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
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients");
};

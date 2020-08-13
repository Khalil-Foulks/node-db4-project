
exports.up = function(knex) {
  return knex.schema
    .createTable("ingredients", tbl => {
        tbl.increments("id");
        tbl.string("ingredient_name", 255).notNullable().unique();
    })
    .createTable("recipes", tbl => {
        tbl.increments("id");
        tbl.string("recipe_name", 255).notNullable().unique();
        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredients.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        tbl.float("ingredient_amount").notNullable()
    })
    .createTable("recipe_steps", tbl => {
        tbl.increments("id");
        tbl.integer("recipe_id", 255)
            .unsigned()
            .notNullable()
            .references("recipes.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        tbl.text("steps").notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
};

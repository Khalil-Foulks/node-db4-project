
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_amount: 1},
        {recipe_id: 1, ingredient_id: 2, ingredient_amount: 1},
        {recipe_id: 1, ingredient_id: 3, ingredient_amount: 1},
        {recipe_id: 1, ingredient_id: 4, ingredient_amount: 1},
        {recipe_id: 1, ingredient_id: 5, ingredient_amount: 1},
        {recipe_id: 1, ingredient_id: 6, ingredient_amount: 1},
        {recipe_id: 1, ingredient_id: 7, ingredient_amount: 1},
        {recipe_id: 1, ingredient_id: 8, ingredient_amount: 1},
        {recipe_id: 1, ingredient_id: 9, ingredient_amount: 1},
      ]);
    });
};

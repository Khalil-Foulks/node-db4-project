
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cup of corn flour'},
        {ingredient_name: 'gram of butter'},
        {ingredient_name: 'cup of sugar'},
        {ingredient_name: 'an egg'},
        {ingredient_name: 'cup milk'},
        {ingredient_name: 'cup water'},
        {ingredient_name: 'teaspoon baking soda'},
        {ingredient_name: 'teaspoon baking powder'},
        {ingredient_name: 'cup cocoa powder'},
      ]);
    });
};

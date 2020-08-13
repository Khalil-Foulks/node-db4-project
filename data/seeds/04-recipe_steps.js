
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {recipe_id: 1, steps: 'add ingredients'},
        {recipe_id: 1, steps: 'bake'},
        {recipe_id: 1, steps:'eat'}
      ]);
    });
};

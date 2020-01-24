
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
          {project_name: 'Finish Sprint'},
          {project_name: 'Make a new Painting'},
          {project_name: 'Start growing microgreens'},
          {project_name: 'Research Lactobacillus casei and what it eats in milk'},
          {project_name: 'Go to the library'},
          {project_name: 'Re-pot coffee tree'}
      ]);
    });
};

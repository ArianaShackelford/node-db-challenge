
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
          {project_name: 'Finish Sprint',
            description: 'YOU CAN DO IT',
          },
          {project_name: 'Make a new Painting'},
          {project_name: 'Start growing microgreens'},
          {project_name: 'Research Lactobacillus casei and what it eats in milk',
            description: 'research relationship between culture and milk to see if you can make Yakult with lactose free milk'
        },
          {project_name: 'Go to the library'},
          {project_name: 'Re-pot coffee tree'}
      ]);
    });
};

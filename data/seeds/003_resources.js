
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {resource_name: 'coffee tree'},
        {resource_name: 'potting soil'},
        {resource_name: 'acrylic paints'},
        {resource_name: 'canvas', description: '5 x 8'},
        {resource_name: 'paint brushes', description: 'wide variety'},
        {resource_name: 'library card'},
        {resource_name: 'computer'},
        {resource_name: 'Yakult', description: 'to use as the culture for making more, like you do with keifer but with no brains'},
        {resource_name: 'milk', description: 'lactose free'}
      ]);
    });
};

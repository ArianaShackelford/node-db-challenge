
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: 'Follow read me instructions and create a server and api',
          notes: 'Do the best you can',
        },
        {
          project_id:2,
          description: 'Decide what you want to paint',
          notes: 'look on pinterest for inspo',
        },
        {
          project_id:5,
          description: 'Drive to library and browse',
        }
      ]);
    });
};

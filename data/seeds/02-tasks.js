exports.seed = function(knex) {
    return knex('tasks').insert([
      {
        project_id: 1,
        description: 'Go to work',
        notes:
          'I love going to work',
      },
      {
        project_id: 1,
        description: 'Do my work',
        notes: 'I love doing my work',
      },
      {
        project_id: 1,
        description: 'Set up this API',
        notes: 'My favorite API',
      },
      {
        project_id: 2,
        description: "Test everything",
        notes: "Make sure all the endpoints work"
      }
    ]);
  };
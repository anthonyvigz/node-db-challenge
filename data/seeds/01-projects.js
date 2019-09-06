exports.seed = function(knex, Promise) {
    return knex('projects').insert([
      {
        name: 'Take over the world!',
        description:
          'We are going to take over the world.',
      }, {
        name: 'Complete this sprint'
      }
    ]);
  };
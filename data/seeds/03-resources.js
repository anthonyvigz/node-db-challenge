exports.seed = function(knex) {
    return knex('resources').insert([
      {
        name: "Vial",
       description: "Can put chemicals in the vial"
      },
      {
        name: "Thermometer"
      },
    ]);
  };
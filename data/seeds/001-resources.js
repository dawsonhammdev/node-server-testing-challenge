exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('resources')
    .truncate()
    .then(function() {
      return knex('resources').insert([
        { resource: 'Gold' },
        { resource: 'Silver' },
        { resource: 'Coal' },
        { resource: 'Diamond' },
       
      ]);
    });
};
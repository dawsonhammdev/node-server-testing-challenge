exports.up = function (knex) {
    return knex.schema.createTable("resources", tbl => {
      tbl.increments();
  
      tbl.string("resource", 255).notNullable();
    });
  };
  
  exports.down = function (knex) {
    // undo the operation in up
    return knex.schema.dropTableIfExists("resources");
  };
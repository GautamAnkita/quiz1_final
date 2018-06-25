
exports.up = knex => {
    return knex.schema.createTable("cluckrinfo", table => {
      table.increments("id");
      table.string("username");
      table.text("description");
      table.string("image_Url");
      table.timestamp("createdAt").default(knex.fn.now());
      table.timestamp("updatedAt").default(knex.fn.now());
    
    });
  };

  exports.down = knex => {
    return knex.schema.dropTable("cluckrinfo");
  };
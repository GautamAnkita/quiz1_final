// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cluckr_demo'
},
migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    }
}


};

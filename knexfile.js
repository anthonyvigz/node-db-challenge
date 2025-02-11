module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true, 
      connection: {
        filename: './data/projects.db3',
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      // needed when using foreign keys
      pool: {
        afterCreate: (conn, done) => {

          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
      },
    },
  };
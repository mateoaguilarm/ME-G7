// Update with your config settings.

module.exports = {

  // Development: Modo de Desarrollo. (Tiene datos de prueba, permite realizar experimentos)
  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'QuEdicE'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // Staging: Modo de Montaje. (Contiene datos parecidos al modo produccion para verificar que funcione)
  staging: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     process.env.CONNECTION_USER,
      password: process.env.CONNECTION_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // Production: Modo de Produccion o en linea. (Contiene datos reales del software/business)
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     process.env.CONNECTION_USER,
      password: process.env.CONNECTION_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

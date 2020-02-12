const dbConfig = require('../credentials/databaseCredentials')

module.exports = {
  local: {
    host: dbConfig.local.host,
    username: dbConfig.local.user,
    password: dbConfig.local.pass,
    database: dbConfig.local.database,
    dialect: process.env.DB_DIALECT || "mysql",
    storage: "./__tests__/database.sqlite",
    operatorAliases: false,
    logging: false,
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true,
	  timezone: '-03:00',
    }
  },
  predial: {
    host: dbConfig.pnet.host,
    username: dbConfig.pnet.user,
    password: dbConfig.pnet.pass,
    database: dbConfig.pnet.database,
    dialect: process.env.DB_DIALECT || "mysql",
    storage: "./__tests__/database.sqlite",
    operatorAliases: false,
    logging: false,
    define: {
      timestamp: false,
      underscored: true,
      underscoredAll: true
    }
  }
};

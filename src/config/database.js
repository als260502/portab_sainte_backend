module.exports = {
  local: {
    host: "localhost",
    username: "gambiarra",
    password: "alsandre.alsana",
    database: "portabilidade",
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
    host: "172.16.10.17",
    username: "andresouza",
    password: "tapanacareca",
    database: "sapo2",
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

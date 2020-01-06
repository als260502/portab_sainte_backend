const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const SerPredialfone = require("../app/models/SerPredialfone");
const Sheduler = require("../app/models/Sheduler");

const db = {
  local: new Sequelize(dbConfig.local),
  predial: new Sequelize(dbConfig.predial)
};

Sheduler.init(db.local);

SerPredialfone.init(db.predial);

module.exports = db;

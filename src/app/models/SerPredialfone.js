const { Model, DataTypes } = require("sequelize");

class SerPredialfone extends Model {
  static init(sequelize) {
    super.init(
      {
        codcliente: DataTypes.INTEGER,
        numero: DataTypes.INTEGER,
        sip_username: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "ser_predialfone"
      }
    );
  }
}

module.exports = SerPredialfone;

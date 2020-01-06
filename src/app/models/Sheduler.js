const { Model, DataTypes } = require("sequelize");

class Sheduler extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: DataTypes.INTEGER,
        numero: DataTypes.INTEGER,
        telefone: DataTypes.STRING,
        data: DataTypes.DATEONLY,
        hora: DataTypes.TIME,
        enviado: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Sheduler;

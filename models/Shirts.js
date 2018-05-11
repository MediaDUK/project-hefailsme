// var db = require("../models");
// making model of email table in JawBD 
module.exports = function (sequelize, DataType) {
  var Shirts = sequelize.define('shirts', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      field: 'id',
      allowNull: false
    },
    color: {
      type: DataType.STRING,
      field: 'color',
      allowNull: false
    },
    size: {
      type: DataType.STRING,
      field: 'size',
      allowNull: false,
      set(val) {
        this.setDataValue('size', val.toUpperCase());
      }
    },
    qty: {
      type: DataType.INTEGER,
      field: 'qty',
      allowNull: false
    },
    cost: {
      type: DataType.INTEGER,
      field: 'cost',
      allowNull: false
    }
  });
  return Shirts;
};

module.exports = function (sequelize, DataType) {
  var Tour = sequelize.define('Tour', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
      allowNull: false
    },
    date: {
      type: DataType.STRING,
      field: 'date',
      allowNull: false
    },
    venue: {
      type: DataType.STRING,
      field: 'venue',
      allowNull: false
    },
    city: {
      type: DataType.STRING,
      field: 'city',
      allowNull: false
    },
    state: {
      type: DataType.STRING,
      field: 'state',
      allowNull: false
    },
    });
  return Tour;
};
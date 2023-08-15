const { DataTypes } = require("sequelize");
const sequelize = require("../DB/sequelize");
// const Staff = require("./staffModel");
// const Stream = require("./streamModel");

module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define(
    "class",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      abbreviation: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      // Other model options go here
    }
  );

  Class.associate = (models) => {
    const { Staff, Stream } = models;

    Class.belongsTo(Staff, {
      foreignKey: "staffId",
      as: "head",
    });

    Class.hasMany(Stream, {
      foreignKey: "classId",
      as: "class",
    });
  };

  return Class;
};

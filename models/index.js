// const Sequelize = require('sequelize')
const { DataTypes } = require("sequelize");
const sequelize = require("../DB/sequelize");

const Class = require("./classModel")(sequelize, DataTypes);
const Staff = require("./staffModel")(sequelize, DataTypes);
const Stream = require("./streamModel")(sequelize, DataTypes);
const Department = require("./departmentModel")(sequelize, DataTypes);
const DepartmentHead = require("./departmentHeadsModel")(sequelize, DataTypes);

const models = {
  Staff,
  Class,
  Stream,
  Department,
  DepartmentHead,
};

Object.keys(models).forEach((modelKey) => {
  // Create model associations
  if ("associate" in models[modelKey]) {
    models[modelKey].associate(models);
  }
});

module.exports = models;

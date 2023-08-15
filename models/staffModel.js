module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define("Staff", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.ENUM("TEACHING", "NON-TEACHING"),
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Staff.associate = (models) => {
    const { Class, Stream, Department } = models;
    Staff.hasMany(Class);
    Staff.hasMany(Department);
    Staff.hasMany(Stream);
  };
  return Staff;
};

// Staff.hasMany(Department, {
//   foreignKey: {
//     name:"head",
//     allowNull: true
//   }
// });

// Staff.hasMany(DepartmentHead, {
//   foreignKey: {
//     name:"head",
//     allowNull: false
//   }
// });

// module.exports = Staff;

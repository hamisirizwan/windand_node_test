module.exports = (sequelize, DataTypes) => {
  const DepartmentHead = sequelize.define("department_heads", {
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  DepartmentHead.associate = (models) => {
    const { Staff, Department } = models;

    DepartmentHead.belongsTo(Staff, {
      foreignKey: "staffId",
      as: "head",
    });

    DepartmentHead.belongsTo(Department, {
      foreignKey: "departmentId",
      as: "department",
    });
  };

  return DepartmentHead;
};

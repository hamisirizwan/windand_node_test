
module.exports = (sequelize, DataTypes) => {
   
  const Department = sequelize.define(
    "department",
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
    }
  );
  
  Department.associate = (models) =>{ 
    const {Staff, DepartmentHead} = models

    Department.belongsTo(Staff, {       
      foreignKey: "staffId",
      as:"head" 
    });

    Department.hasMany(DepartmentHead, {
      foreignKey: {
        name:"departmentId",
        as:"departMentHeads",
        allowNull: false
      }
    });
  }

  return Department
 }




module.exports = (sequelize, DataTypes) => {
  const Stream = sequelize.define(
    "stream",
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

  Stream.associate = (models) => {
    const { Staff, Class } = models;

    Stream.belongsTo(Staff, {
      foreignKey: "staffId",
      as: "teacher",
    });

    Stream.belongsTo(Class, {
      foreignKey: "classId",
      as: "class",
    });
  };
  return Stream;
};

// module.exports = Stream;

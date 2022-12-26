module.exports = (sequelize, Sequelize,DataTypes) => {
  const Role = sequelize.define("roles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    role:{
      type:DataTypes.STRING
    }
  });

  return Role;
};

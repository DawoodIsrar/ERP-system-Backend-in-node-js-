module.exports = (sequelize, Sequelize,DataTypes) => {
    const Leaves = sequelize.define("leaves", {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      date: {
        type: DataTypes.DATE
      },
      desc:{
        type:DataTypes.STRING
      }
    });
  
    return Leaves;
  };
  
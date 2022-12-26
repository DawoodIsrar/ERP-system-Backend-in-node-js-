module.exports = (sequelize, Sequelize,DataTypes) => {
    const Salary = sequelize.define("Salary", {
      // s_id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      month:{
        type:DataTypes.STRING
      },
      annual: {
        type: DataTypes.INTEGER
      },
      basic_pay:{
        type:DataTypes.INTEGER
      },
      bonus:{
        type:DataTypes.INTEGER
      }
  
    });
  
    return Salary;
  };
  
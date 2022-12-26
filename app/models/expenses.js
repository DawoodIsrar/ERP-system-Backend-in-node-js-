const { expenses } = require(".");

module.exports = (sequelize, Sequelize,DataTypes) => {
    const expenses = sequelize.define("Expenses", {
      // ex_id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      name:{
        type:DataTypes.STRING
      },
      submitted_by: {
        type: DataTypes.STRING
      },
      amount:{
        type:DataTypes.INTEGER
        
      },
      date:{
        type:DataTypes.DATEONLY
        
      },
      apply_for:{
        type:DataTypes.STRING
      }

    });
  
    return expenses;
  };
  
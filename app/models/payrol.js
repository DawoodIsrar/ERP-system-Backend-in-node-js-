module.exports = (sequelize, Sequelize,DataTypes) => {
    const payrol = sequelize.define("Payrol", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      paydate:{
        type:DataTypes.DATE
      },
      amount: {
        type: DataTypes.INTEGER
      },
      payMode:{
        type:DataTypes.STRING
      },
      payNo:{
        type:DataTypes.INTEGER
      },
      basicPay:{
        type:DataTypes.INTEGER
      },
      deduction:{
        type:DataTypes.INTEGER
      },
      netPay:{
        type:DataTypes.INTEGER
      },
      status:{
        type:DataTypes.STRING
      },
      report:{
        type:DataTypes.STRING
      }
    });
  
    return payrol;
  };
  
module.exports = (sequelize, Sequelize,DataTypes) => {
    const Appraisal = sequelize.define("appraisal", {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      name: {
        type: DataTypes.STRING
      },
      appraisal:{
        type:DataTypes.STRING
      },
      
    });
  
    return Appraisal;
  };
  
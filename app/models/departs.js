module.exports = (sequelize, Sequelize,DataTypes,QueryTypes) => {
    const Depart = sequelize.define("departments", {
      // d_id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      name: {
        type: DataTypes.STRING
      },
      desc:{
        type:DataTypes.STRING
      }
    });
  
    return Depart;
  };
  
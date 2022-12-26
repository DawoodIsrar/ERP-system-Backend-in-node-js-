module.exports = (sequelize, Sequelize,DataTypes) => {
    const Attendence = sequelize.define("attendence", {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      status: {
        type: DataTypes.STRING
      },
      date:{
        type:DataTypes.DATEONLY
      },
      status:{
        type:DataTypes.STRING
      },
      check_in:{
        type:DataTypes.TIME
      },
      check_out:{
        type:DataTypes.TIME
      },


    });
  
    return Attendence;
  };
  
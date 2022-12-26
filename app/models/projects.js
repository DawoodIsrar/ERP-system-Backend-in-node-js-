module.exports = (sequelize, Sequelize,DataTypes) => {
    const projects = sequelize.define("projects", {
      // p_id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      name: {
        type: DataTypes.STRING
      },
      desc:{
        type:DataTypes.STRING
      },
      status:{
        type:DataTypes.STRING
      },
      assignDate:{
        type:DataTypes.DATEONLY
      }
      
    });
  
    return projects;
  };
  
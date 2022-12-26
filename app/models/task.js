const { tasks } = require(".");

module.exports = (sequelize, Sequelize,DataTypes) => {
    const tasks = sequelize.define("Tasks", {
      // t_id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      name:{
        type:DataTypes.STRING
      },
      desc: {
        type: DataTypes.STRING
      },
      start:{
        type:DataTypes.DATEONLY
        
      },
      end:{
        type:DataTypes.DATEONLY
        
      },

    });
  
    return tasks;
  };
  
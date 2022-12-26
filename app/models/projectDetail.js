module.exports = (sequelize, Sequelize,DataTypes) => {
    const ProjectsDetail = sequelize.define("ProjectsDetail", {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      name: {
        type: DataTypes.STRING
      },
      type:{
        type:DataTypes.STRING
      },
      desc:{
        type:DataTypes.STRING
      }
    });
  
    return ProjectsDetail;
  };
  
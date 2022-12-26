module.exports = (sequelize, Sequelize) => {
    const EmpProjects = sequelize.define("EmpolyiesProjects", {
      // id: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      name: {
        type: Sequelize.STRING
      },
      project:{
        type:sequelize.STRING
      }
    });
  
    return EmpProjects;
  };
  
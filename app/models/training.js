module.exports = (sequelize, Sequelize) => {
    const Training = sequelize.define("training", {
      // t_id: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      courses: {
        type: Sequelize.STRING
      }
    });
  
    return Training;
  };
  
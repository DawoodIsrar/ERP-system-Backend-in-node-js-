module.exports = (sequelize, Sequelize) => {
    const Reports = sequelize.define("Reports", {
     
        Reports: {
        type: Sequelize.STRING
      }
    });
  
    return Reports;
  };
  
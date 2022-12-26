module.exports = (sequelize, Sequelize) => {
    const EmpTimeSheet = sequelize.define("EmployesTimeSheet", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return EmpTimeSheet;
  };
  
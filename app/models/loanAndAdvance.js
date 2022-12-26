module.exports = (sequelize, Sequelize) => {
    const LoanAndAdvance = sequelize.define("LoanAndAdvance", {
      // id: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      // EmpName: {
      //   type: Sequelize.STRING
      // },
      // EmpId: {
      //   type: Sequelize.INTEGER
      // },
      Amount: {
        type: Sequelize.INTEGER
      },
      // Phone_no: {
      //   type: Sequelize.STRING
      // },
      // Email: {
      //   type: Sequelize.STRING
      // },
      Apply_for: {
        type: Sequelize.STRING
      },
      Shift: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.STRING
      },
    });
  
    return LoanAndAdvance;
  };
  
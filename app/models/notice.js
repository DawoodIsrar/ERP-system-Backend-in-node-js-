module.exports = (sequelize, Sequelize) => {
    const Notice = sequelize.define("Notice", {
      // id: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      notice_title: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.STRING
      },
    

    });
  
    return Notice;
  };
  
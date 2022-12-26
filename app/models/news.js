module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define("news", {
      // id: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      news: {
        type: Sequelize.STRING
      }
    });
  
    return News;
  };
  
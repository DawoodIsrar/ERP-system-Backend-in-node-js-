module.exports = (sequelize, Sequelize) => {
    const Positions = sequelize.define("positions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      position: {
        type: Sequelize.STRING
      }
    });
  
    return Positions;
  };
  
module.exports = (sequelize, Sequelize,DataTypes) => {
    const User = sequelize.define("Users", {
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      retypepassword:{
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
  
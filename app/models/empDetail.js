module.exports = (sequelize, Sequelize) => {
    const EmpDetail = sequelize.define("EmployesDetail", {
      // id: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      name: {
        type: Sequelize.STRING
      },
      age:{
        type:sequelize.INTEGER
      },
      gender:{
          type:sequelize.STRING
      },
      contact:{
        type:sequelize.INTEGER
      },
      email:{
        type:sequelize.STRING
      },
      password:{
        type:sequelize.STRING
      }

    });
  
    return EmpDetail;
  };
  
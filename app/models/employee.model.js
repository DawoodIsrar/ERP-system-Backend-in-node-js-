
module.exports = (sequelize, Sequelize,DataTypes) => {
  const User = sequelize.define("Employees", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true
    // },
    username: {
      type: DataTypes.STRING
    },
    email:{
      type:DataTypes.STRING,
      minlength:5,
      maxlength:255,
      unique:true
    },
    password:{
      type:DataTypes.STRING
    },
     age:{
      type:DataTypes.INTEGER
    },
    // gender:{
    //     type:DataTypes.STRING
    // },
    contact:{
      type:DataTypes.STRING,
      minlength:11,
      maxlength:11},

  });

  return User;
};

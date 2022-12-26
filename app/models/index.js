const config = require("../config/db.config.js");

const {Sequelize,DataTypes, QueryTypes} = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User =require("./user.model.js")(sequelize, Sequelize,DataTypes); 
db.employee = require("../models/employee.model.js")(sequelize, Sequelize,DataTypes,QueryTypes);
db.role = require("../models/role.model.js")(sequelize, Sequelize,DataTypes);
db.Reports = require("../models/Report.js")(sequelize, Sequelize,DataTypes);
db.departments =require("../models/departs.js")(sequelize, Sequelize,DataTypes,QueryTypes); 
db.training =require("../models/training.js")(sequelize, Sequelize,DataTypes); 
db.projects =require("../models/projects.js")(sequelize, Sequelize,DataTypes); 
db.ProjectsDetail =require("../models/projectDetail.js")(sequelize, Sequelize,DataTypes); 
db.leaves =require("../models/leaves.js")(sequelize, Sequelize,DataTypes); 
db.appraisal =require("../models/appraisals.js")(sequelize, Sequelize,DataTypes); 
db.payrol =require("../models/payrol.js")(sequelize, Sequelize,DataTypes); 
db.salary =require("../models/salary.js")(sequelize, Sequelize,DataTypes); 
db.Notice =require("../models/notice.js")(sequelize, Sequelize,DataTypes); 
db.attendence =require("../models/attendence.js")(sequelize, Sequelize,DataTypes); 
db.tasks =require("../models/task.js")(sequelize, Sequelize,DataTypes); 
db.expenses =require("../models/expenses.js")(sequelize, Sequelize,DataTypes); 
db.loanAndAdvance =require("../models/loanAndAdvance.js")(sequelize, Sequelize,DataTypes); 
// db.Reports.hasOne(db.Notice,{
  
// })
db.role.belongsToMany(db.User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "u_id"
});
db.User.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "u_id",
  otherKey: "roleId",
});


db.employee.belongsToMany(db.training,{
  through:"employeetraining",
  foreignKey:"e_id",
  otherKey:"t_id"
});
db.employee.hasMany(db.projects,{
  // through:"empprojects",
  foreignKey:"e_id",
  // otherKey:"p_id"
});
db.employee.belongsToMany(db.leaves,{
  through:"empleaves",
  foreignKey:"e_id",
  otherKey:"l_id"
});
db.employee.belongsToMany(db.appraisal,{
  through:"empAppraisals",
  foreignKey:"e_id",
  otherKey:"ap_id"
});
db.employee.hasMany(db.tasks,{
  // through:"empTasks",
  foreignKey:"e_id",
  // otherKey:"t_id"
});
db.tasks.belongsToMany(db.employee,{
  through:"empTasks",
  foreignKey:"t_id",
  otherKey:"e_id"
});
db.employee.hasMany(db.expenses,{
  // through:"empExpenses",
  foreignKey:"e_id",
  // otherKey:"ex_id"
});
// db.expenses.belongsToMany(db.employee,{
//   through:"empExpenses",
//   foreignKey:"ex_id",
//   otherKey:"e_id"
// });
db.User.hasMany(db.loanAndAdvance,{
  // through:"emploanandadvances",
  foreignKey:"u_id",
  // otherKey:"la_id"
})
// db.loanAndAdvance.belongsToMany(db.employee,{
//   through:"emploanandadvances",
//   foreignKey:"la_id",
//   otherKey:"e_id"
// })
db.employee.hasOne(db.attendence,{
  foreignKey:'e_id'
})
// db.attendence.hasOne(db.employee,{
//   // otherKey:'e_id'
// })
// db.salary.hasOne(db.employee,{
//   // otherKey:'e_id'
// })
// db.employee.hasMany(db.payrol,{
//   foreignKey:"e_id"
// });
db.employee.hasOne(db.salary,{
  foreignKey:"e_id"
})

db.departments.hasMany(db.employee,{
  foreignKey:"d_id",
});
db.departments.hasMany(db.payrol,{
  foreignKey:"d_id"
});
db.departments.hasMany(db.training,{
  foreignKey:"d_id",
});
// db.departments.hasMany(db.projects,{
//   foreignKey:"d_id",
// });
db.departments.hasMany(db.Notice,{
  foreignKey:"d_id",
});
db.projects.hasMany(db.ProjectsDetail,{
foreignKey:"p_id"
});
// db.salary.hasMany(db.payrol,{
//   foreignKey:"s_id"
// })
// db.salary.hasOne(db.employee,{
//   foreignKey:"e_id"
// })
db.ROLES = ["user", "admin", "hr"];

module.exports = db;

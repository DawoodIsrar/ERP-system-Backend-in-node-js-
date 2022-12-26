const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const controller = require("./app/controllers/auth.controller");
const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ERP application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
var empctr = require('./app/controllers/userctrl');
var salctrl = require('./app/controllers/salariesctrl');
var leav = require('./app/controllers/leavesctrl');
var pro = require('./app/controllers/projectsctrl');
var depart = require('./app/controllers/departmentctrl');
var pd = require('./app/controllers/projectdetailctrl');
var payrol = require('./app/controllers/payrolctrl');
var appraisal = require('./app/controllers/appraisalctrl');
var attendence = require('./app/controllers/attendecectrl');
var tasks = require('./app/controllers/taskctrl');
var expenses = require('./app/controllers/expensesctrl');



app.get('/add/emp',empctr.addemp)
app.get('/add/bulkemp',empctr.addBulkemp)
app.get('/add/sal',salctrl.addsalary)
// app.get('/add/netsal',salctrl.gettotalsalary),
app.get('/add/eidsal',salctrl.getsalarybyeid)
app.get('/add/leave',leav.addleaves)
app.get('/add/dp',depart.adddpt)
app.get('/add/bulkdp',depart.addBulkdp)

app.get('/add/payrol',payrol.addpay)
app.get('/add/projects',pro.addpro)
app.get('/add/pd',pd.addpd)
app.get('/add/appraisal',appraisal.addapr)
app.get('/add/appraisal',appraisal.addapr)
app.get('/add/attendence',attendence.addattendence)
app.get('/add/checkattendence',attendence.checkattendence)
app.get('/add/addtasks',tasks.addtask)
app.get('/add/addbulktasks',tasks.addBulktask)

app.get('/add/addexpenses',expenses.addexpenses)
app.get('/add/addbulkExpenses',expenses.addBulkexpenses)


//1.Add department
app.post( "/api/auth/addDepart",controller.adddepart)
//2.All department details
app.get('/show/totalDpdetail',depart.totalDeparts)
//2.show counts of departments
app.get('/show/totalDpCount',depart.countDepart)
//3.Add Employee
app.post("/api/auth/addEmp",controller.addEmp);
//4.All employees details
app.get('/show/totalempdetails',empctr.totalEmpdetails)
//5.Count all employees
app.get('/show/totalempCount',empctr.countEmp)
//6.Add Salary
app.post("/api/auth/addSalary",controller.addSalary);
//7.Show salary by id
app.get("/api/ShowSalary/:id",controller.ShowSalaryofEmployee);
//8.Show all salaries
app.get("/api/ShowAllSalary",controller.ShowAllSalaries);
//9.Add Expenses
app.post("/api/auth/addExpense",controller.addExpenses);
//shoe expense by id
app.get("/api/auth/showExpenseById/:id",controller.showExpenceById);
//10.total Expenses with details
app.get('/show/alldetailExpenses',expenses.totalexpensesdetails)
//11.total count of expenses
app.get('/show/countexpense',expenses.countExpenses)
//12.Add Notice
app.post("/api/auth/addNotice",controller.addNotice);
//13.show all notices
app.get("/api/show/allNotices",controller.showNotices);
//14.Add Appraisal
app.post("/api/auth/addAppraisal",controller.addAppraisal);
//15.Add Projects
app.post("/api/auth/addProjects",controller.addProjects);
//16.show projecst by id
app.get("/api/show/showprojects/:id",controller.showProjects);
//16(B).show All projects
app.get("/api/show/showAllProjects",controller.showAllProjects);
//17.Add Projects details
app.post("/api/auth/addProjectsDetails",controller.addProjectsDetails);
//18.Add Attendence
app.post("/api/auth/addAttendence",controller.addAttendence);
//19.show attendece by id
app.get("/api/show/attendencebyid/:id",controller.showAttendencebyid);
//19.show attendece by employee name
app.get("/api/show/attendencebyname/:name",controller.showAttendencebyName);
//20.show all attendece 
app.get("/api/show/allattendence",controller.showAllAttendence);
//21.Add Leave
app.post("/api/auth/addLeave",controller.addLeave);
//22.Add Task
app.post("/api/auth/addTask",controller.addTask);
//23.task by employee id
app.get("/api/show/showTasks/:id",controller.showTasksByid);
//24.show all task with detail
app.get('/show/allTasksDetail',tasks.totaltaskdetails)
//25.show how much task or count
app.get('/show/counttasks',tasks.counttask)

//26.loan and advance Request
app.post("/api/auth/loanAndAdvance",controller.LoanAndAdvance);
//27.get laon and advance by emp id
app.get("/api/show/showloanAndAdvance/:id",controller.showloanAndAdvance);

//add to brigde
// app.post("/api/addtobrigde/",loanbrigde.addtoemploans);
// app.post("/addLoan",loanbrigde.addloan);
// app.get("/findEmployee",controller.findEMployee);
//middleware for handling error 
app.use(function(err,req,res,next){
res.status(500).send('something field (internal server error)')
});







function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "hr"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// //query find function
// findbyPK
// findOne
// finadAll
// findOrCreate
// findAndCountAll
// =================================
// const employee = db.employee
// var findBypk = async (req,res)=>{
//  let data =await employee.findbyPK{1}
// }

// var findOne = async (req,res)=>{
//   let data = await employee.findOne()
// }

// var findAndCountAll = async (req,res)=>{
//   let data = await employee.findAndCountAll({
//     where:{
//       email: 'dawood@gmail.com',
//     }
//   })
//   let response = {
//     'data':data
//   }
//   res.status(200).json(response)
// }
// var findOrCreate = async (req,res)=>{
//   let [data,created] = await employee.findOrCreate({
//     where:{
//       name: 'dawood',
//     },
//     default:{
//       emial:'dummy@gmail.com',
//       gender:'male'
//     }
//   })
//   let response = {
//     'data':data
//     'add':created
//   }
//   res.status(200).json(response)
// }

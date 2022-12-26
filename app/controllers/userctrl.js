var db = require('../models');
const { QueryTypes } = require('sequelize');
const employee = db.employee;
var addemp = async (req,res)=>{

  try {
    let data = await employee.create({
        'id':'1',
        'username':'dawood',
        'email':'dawood@gmail.com',
        'password':'dasdsdada',
        'age':'23',
        'contact:':'03404876510',
        'd_id':'1'
    });
    let response = {
        'data': 'employee add'
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send('Internal server error')
  }
}
var addBulkemp = async (req,res)=>{

  
    try {
        let data = await employee.bulkCreate([{
            'id':'2',
            'username':'waqas',
            'email':'waqas@gmail.com',
            'password':'waqas',
            'age':'23',
            'contact:':'03404876510',
            'd_id':'1'
        },
        {
            'id':'3',
            'username':'waseem',
            'email':'waseem@gmail.com',
            'password':'waseem',
            'age':'23',
            'contact:':'03404876510',
            'd_id':'1'
        }]);
        let response = {
            'data': 'employees addes'
        }
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).send('Internal server error')
    }
}
var totalEmpdetails = async( req,res) => {
try {
    let data =await db.sequelize.query('SELECT * FROM public."Employees"',{
        type:QueryTypes.SELECT,
    })
    // let response = {
    //     'data': data
    // }
    res.status(200).json(data);
} catch (error) {
    res.status(500).send('internal server error')
}
}
var countEmp = async (req,res) => {
    try {
        const { count, rows }  = await employee.findAndCountAll({});
//    let response = {
//        'Total Employees':  count 
//    }
   res.json(count);
   res.end();
    } catch (error) {
        res.status(500).send('internal server error')
    }
}
module.exports = {
    addemp,
addBulkemp,
    totalEmpdetails,
    countEmp,
}
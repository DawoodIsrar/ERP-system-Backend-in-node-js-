var db = require('../models');
const { QueryTypes } = require('sequelize');
const salary = db.salary;
var addsalary = async (req,res)=>{

    let data = await salary.create({
        's_id':'1',
        'month':'dec',
        'annual':150000,
        'basic_pay':30000,
        'bonus':2000,
        'e_id':'1'
    })
    let response = {
        'data': data
    }
    res.status(200).json(response);
}
//get total salray of employee by his id
// var gettotalsalary = async (req,res)=>{

//     let data =await db.sequelize.query('Select (convert(int, col3)+convert(int, col4)) as net_salary from Salaries',{
//         type:QueryTypes.SELECT,
//     })

//     let response = {
//         'net_pay': data
//     }
//     res.status(200).json(response);
// }
//get salary by employee id
var getsalarybyeid = async (req,res)=>{

    const data =await db.sequelize.query('select sum(basic_pay+bonus) as net_salary from "Salaries" where e_id=1',{
        type:QueryTypes.SELECT,
    })

    let response = {
        'net_pay': data
    }
    res.status(200).json(response);
}
module.exports = {
    addsalary,
    // gettotalsalary,
    getsalarybyeid
}
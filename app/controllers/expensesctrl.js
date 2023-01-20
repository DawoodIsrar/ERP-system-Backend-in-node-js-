var db = require('../models');
const { QueryTypes } = require('sequelize');
const expenses = db.expenses;
var addexpenses = async (req,res)=>{

    let data = await expenses.create({
        'ex_id':'1',
        'name':'Expense of dinner',
        'submitted_by':'dawood israr',
        'amount':'20000',
        'date':'2/2/2022',
        'apply_for':'Expense'
    });
    let response = {
        'data': 'Expense for dinner is added'
    }
    res.status(200).json(response);
}
var addBulkexpenses= async (req,res)=>{

    let data = await expenses.bulkCreate([{
        'ex_id':'2',
        'name':'Expense of launch',
        'submitted_by':'waqas khan',
        'amount':'50000',
        'date':'3/2/2022',
        'apply_for':'Expense'
    },
    {
        'ex_id':'3',
        'name':'Expense of EXPO',
        'submitted_by':'Muhhammad Waseem Awan',
        'amount':'1000000',
        'date':'2/2/2022',
        'apply_for':'Expense'
    }]);
    let response = {
        'data': 'bulk expenses is added for launch and expo'
    }
    res.status(200).json(response);
}
var totalexpensesdetails = async( req,res) => {
    let data =await db.sequelize.query('SELECT * FROM public."Expenses"',{
        type:QueryTypes.SELECT,
    })
    // let response = {
    //     'Expenses': data
    // }
    return res.status(200).json(data);
}
var countExpenses = async (req,res) => {
    const { count, rows }  = await expenses.findAndCountAll({});
//    let response = {
//        'Total Expenses':  count 
//    }
   res.json(count);
   res.end();
}
module.exports = {
    addexpenses,
    addBulkexpenses,
    totalexpensesdetails,
    countExpenses
}
var db = require('../models');
const { QueryTypes } = require('sequelize');
const task = db.tasks;
var addtask = async (req,res)=>{

    let data = await task.create({
        't_id':'1',
        'name':'Employee Dashboard of ERP system',
        'desc':'develop the the employee dashboard od erp system having detail pages of dashboard,projects,task,detail, report',
        'start':'1/2/2022',
        'end':'2/2/2022',
        'e_id':'1'
    });
    let response = {
        'data': 'task for employee having id = 1 is added'
    }
    res.status(200).json(response);
}
var addBulktask = async (req,res)=>{

    let data = await task.bulkCreate([{
        't_id':'2',
        'name':'dashboard for hr madule',
        'desc':'develop the the employee dashboard od erp system having detail pages of dashboard,projects,task,notice ets',
        'start':'1/2/2022',
        'end':'2/2/2022',
        'e_id':'2'
    },
    {
        't_id':'3',
        'name':'dashboard for admin madule',
        'desc':'develop the the employee dashboard od erp system having detail pages of dashboard,projects,task,notice ets',
        'start':'1/2/2022',
        'end':'2/2/2022',
        'e_id':'3'
    }]);
    let response = {
        'data': 'bulk task is added for employees having id 2 and 3'
    }
    res.status(200).json(response);
}
var totaltaskdetails = async( req,res) => {
    let data =await db.sequelize.query('select e."username" as EmpName, t."name" as TaskName,t."desc",t."start",t."end"  from "Employees"  as e inner join "Tasks" as t on t.e_id = e.id ',{
        type:QueryTypes.SELECT,
    })
    // let response = {
    //     'tasks': data
    // }
    res.status(200).json(data);
}
var counttask = async (req,res) => {
    const { count, rows }  = await task.findAndCountAll({});
   let response = {
       'Total tasks':  count 
   }
   res.json(response);
   res.end();
}
module.exports = {
    addtask,
    addBulktask,
    totaltaskdetails,
    counttask
}
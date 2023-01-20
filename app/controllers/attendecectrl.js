const { DATE } = require('sequelize');
var db = require('../models');
const { QueryTypes } = require('sequelize');
const attendence = db.attendence;
var addattendence = async (req,res)=>{
try {
    
    let data = await attendence.create({
        'id':'1',
        'status':'present',
        'date':'1.2.2022',
        'check_in':'9:00 PM',
        'check_out':'5:00 AM',
        'e_id':'1'
       
    })
    let response = {
        'data': data
    }
    return   res.status(200).json(response);
} catch (error) {
    return   res.status(500).json('sorry something fail!');
    console.log(error);
}
}
//check attendence
var checkattendence = async (req,res)=>{
    const data =await db.sequelize.query('SELECT attendences.status FROM "attendences" where e_id=1 ;',{
        type:QueryTypes.SELECT,
    })
    const name =await db.sequelize.query('Select username from "Employees" where id =1',{
        type:QueryTypes.SELECT,
    })

    let response = {
        'name':name,
        'status': data
    }
    return   res.status(200).json(response);
}
module.exports = {
    addattendence,
    checkattendence
}
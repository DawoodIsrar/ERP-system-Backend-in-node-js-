var db = require('../models');

const apr = db.appraisal;
var addapr = async (req,res)=>{

    let data = await apr.create({
        'id':'1',
        'name':'promotion',
        'appraisal':'congratulation on promotion in the backend development',
       
    })
    let response = {
        'data': 'appraisal add'
    }
    res.status(200).json(response);
}
module.exports = {
    addapr
}
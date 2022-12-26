var db = require('../models');

const payrol = db.payrol;
var addpay = async (req,res)=>{

    let data = await payrol.create({
        'id':'1',
        'paydate':'1/2/2022',
        'amount':30000,
        'payMode':'transaction',
        'payNo':1,
        'basicPay':30000,
        'deduction':450,
        'netPay':29550,
        'status':'recieved',
        'report':'transaction and recieved',
        'e_id':'1',
        'd_id':'1',
        's_id':'1'
    })
    let response = {
        'data': 'payrol add'
    }
    res.status(200).json(response);
}
module.exports = {
    addpay
}
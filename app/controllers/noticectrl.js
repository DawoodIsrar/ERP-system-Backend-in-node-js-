var db = require('../models');

const notice = db.Notice;
var addnotice = async (req,res)=>{

    let data = await notice.create({
        'id':'1',
        'notice_title':'Monday meeting',
        'detail':'on monday there will be meeting of overall teams and we will discuss each and everything about all projects',
       
    })
    let response = {
        'data': data
    }
    res.status(200).json(response);
}
module.exports = {
    addnotice
}
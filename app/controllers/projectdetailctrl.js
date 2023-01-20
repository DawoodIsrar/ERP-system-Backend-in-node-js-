var db = require('../models');

const pd = db.ProjectsDetail;
var addpd = async (req,res)=>{

    let data = await pd.create({
        'id':'1',
        'name':'batoor',
        'type':'web base system',
        'desc':'project is based on the web including alot of management system',
        'p_id':'1'
    })
    let response = {
        'data': 'projects detail add'
    }
    return  res.status(200).json(response);
}
module.exports = {
    addpd
}
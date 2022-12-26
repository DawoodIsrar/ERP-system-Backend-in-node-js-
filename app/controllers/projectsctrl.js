var db = require('../models');

const projects = db.projects;
var addpro = async (req,res)=>{

    let data = await projects.create({
        'p_id':'1',
        'name':'DHA project',
        'desc':'projects include many management system based on web development as well as mobile app',
        'd_id':'1'
    })
    let response = {
        'data': 'projecst add'
    }
    res.status(200).json(response);
}
module.exports = {
    addpro
}
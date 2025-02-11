const db = require ('../data/dbConfig.js');
const mappers = require('../data/helpers/mappers.js')

module.exports = {
    get,
    insert,
    getById
}
//get all tasks
function get() {
    return db('tasks')
        .leftJoin('projects', 'projects.id', 'project_id')
        .select('projects.name as ProjectName', 
        'projects.description as ProjectDescription','tasks.id as TaskID',
        'tasks.description as TaskDescription','tasks.notes','tasks.completed')
        .then(tasks => {
        return tasks.map(task=>mappers.actionToBody(task))
    });
}

function getById(id) {
    return db('tasks')
        .where('tasks.id', id)
        .first()
        .then(task => mappers.actionToBody(task));
}

function insert(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
        return getById(ids[0]);
    })
}
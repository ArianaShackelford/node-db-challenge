const db = require('../data/db-config.js');

module.exports = {
    list, 
    listById, //takes id 
    listTasks, // takes in id
    listProjectResources, //takes id
    create, //takes in param object === request.body
    createTask, //takes task object and project id
    createResource, //takes resource object and project id
}

function list(){
    return db('projects');
};

function listById(id){
    return db("projects")
    .where({id})
    .first();
};

function listTasks(id){
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('t.id', 't.description', 't.notes', 't.completed')
        .where('p.id', id);
};

function listProjectResources(id){
    return db('project_resources as pr')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .join('projects as p', 'p.id', 'pr.project_id')
        .select('p.project_name', 'p.description', 'r.resource_name', 'r.description')
        .where('p.id', id);
}

function create(requestBody){
    return db("projects")
        .insert(requestBody)
        .then(([id]) => {
            return listById(id);
        })
};

function createTask(task, id){
    return db('tasks as t')
        .insert(task)
        .where('t.project_id', id)
        .then(([id]) => {
            return listTasks(id);
        })
};

function createResource(resource, id){
    return db('resources as r')
        .insert(resource)
        .where('r.project_id', id)
        .then(([id]) => {
            return listProjectResources(id);
        })
};
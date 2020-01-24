const express = require('express');

const Projects = require('./projects-module.js');

const router = express.Router();

// ************** PROJECTS ****************
// create a new project

router.post('/', (req, res) => {
    const newProject = req.body;
  
    Projects.create(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

//get a list of projects
router.get('/', (req, res) => {
    Projects.list()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });
//get project by id (not on mvp)

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.listById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

// *************** RESOURCES **************
// add resources to project

router.post('/:id/resources', (req, res) => {
    const newResource = req.body;
  
    Projects.createResource(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });

//get a list of resources

router.get('/:id/resources', (req, res) => {
    const {id} = req.params

    Projects.listProjectResources(id)
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

// ************* TASKS *****************
// add tasks to project

router.post('/:id/task', (req, res) => {
    const newTask = req.body;
    const {id} = req.params
  
    Projects.create(newTask, id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });


// get a list of tasks, include project name and description


module.exports = router;
const express = require('express');

const ProjectRouter = require('./projects/projects-router.js');

const server = express();

server.use(express.json());
server.all('/api/projects', ProjectRouter);

module.exports = server;
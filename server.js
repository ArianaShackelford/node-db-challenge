const express = require('express');

const SchemeRouter = require('./projects/projects-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;
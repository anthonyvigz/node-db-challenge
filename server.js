// importing middleware

const express = require('express');
const helmet = require('helmet');
const server = express();

// connecting to routers

const projectsRouter = require('./routers/projectsRouter.js');
const tasksRouter = require('./routers/tasksRouter.js');
const resourcesRouter = require('./routers/resourcesRouter.js');

// applying middleware

server.use(helmet());
server.use(express.json());

// applying routes

server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api/resources', resourcesRouter);

server.get('/', (req, res) => {
    res.send('Server is up and running.');
});

module.exports = server;
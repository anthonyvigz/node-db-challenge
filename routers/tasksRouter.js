const express = require('express');

const taskModel = require('../tasks/taskModel.js')

const router = express.Router();


router.post('/', async (req, res) => {
    try {    
        const newtask = await taskModel.insert(req.body);
        res.status(201).json(newtask);
    } catch (err) {
        res.status(500).json({ message:"Error posting task", errorMessage:err });
    }
});

router.get('/', async (req, res) => {
    try {
        const tasks = await taskModel.get();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message:"Error retrieving/getting tasks" });
    }
});

router.get('/:id', async (req, res) => {
        res.status(200).json(req.task);
});


module.exports = router;
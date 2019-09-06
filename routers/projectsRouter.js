const express = require('express');

const projectModel = require('../projects/projectModel.js');

const router = express.Router();

router.get('/', async (req,res) => {
    try{
       
        const projects = await projectModel.get();
        res.status(200).json(projects);
    }
    catch(err){
        res.status(500).json({message: 'Error', errorMessage: err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const project = await projectModel.getById(req.params.id);
        res.status(200).json(project);
    }
    catch (err){
        res.status(500).json({message: 'Error', errorMessage: err.message})

    }
});


router.post('/', validateProject, async (req, res) => {
    try {    
        const project = await projectModel.insert(req.body);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({message:err});
    }
});


function validateProject(req, res, next) {
    if (!req.body.name) {
        res.status(404).json({message:'Project name is missing.'});
    } else {
        next();
    }
};

module.exports = router;
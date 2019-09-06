const express = require('express');

const resourceModel = require('../resources/resourceModel.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try{
       
        const resources = await resourceModel.get();
        res.status(200).json(resources);
    }
    catch(err){
        res.status(500).json({ message: 'Error', errorMessage: err })
    }
})

router.get('/:id', validateResourceId, async (req, res) => {
    res.status(200).json(req.resource);
})

router.post('/', async (req, res) => {
    try {    
        const resource = await resourceModel.insert(req.body);
        res.status(201).json(resource);
    } catch (err) {
        res.status(500).json({ message:"ERROR adding resource", errorMessage:err });
    }
});

async function validateResourceId (req, res, next) {
    try {
        const resource = await resourceModel.getById(req.params.id);
        if (!resource || resource.length === 0) {
            res.status(404).json({message:'Invalid resource id'});
        } else {
            req.resource = resource;
            next();
        }
    } catch (err) {
        res.status(500).json({ message:"There was an error while validating resource id" });
    }
};

module.exports = router;
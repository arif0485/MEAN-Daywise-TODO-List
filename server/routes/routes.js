const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todotask = mongoose.model('Todotask');
router.get('/getAllTasks',(req,res)=> {
    Todotask.find({}, function (err, doc) {
        if (!err) {
            res.json({
                message:'success',
                data: doc
            })
        }else{
            res.status(400).json({
                error: ['Error Occured']
            });
        }
    })
});

router.post('/createTask',(req,res)=> {
    var todotask = new Todotask();
    todotask.date = req.body.date;
    todotask.isChecked = req.body.isChecked;
    todotask.title = req.body.title;
    todotask.save((err, doc) => {
        if (!err) {
            res.json({
                message:'success',
                data: doc
            })
        }else{
            res.status(400).json({
                error: ['Error Occured']
            });
        }
    })
});


router.put('/updateTaskById/:id',(req,res)=> { 
    Todotask.findOneAndUpdate({_id:req.params.id}, req.body, function (err, doc) {
        if (!err) {
            res.json({
                message:'Updated Successfully'                
            })
        }else{
            res.status(400).json({
                error: ['Error Occured']
            });
        }
    })
});

router.delete('/deleteTaskById/:id',(req,res)=> { 
    Todotask.findOneAndRemove({_id:req.params.id}, function (err, doc) {
        if (!err) {
            res.json({
                message:'Deleted Successfully'                
            })
        }else{
            res.status(400).json({
                error: ['Error Occured']
            });
        }
    })
});

module.exports = router;
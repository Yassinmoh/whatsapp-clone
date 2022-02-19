const express = require('express');
const router =express.Router()
const message = require('../model/message')

//ADD NEW MESSAGE:
router.post('/new',(req, res) => {
    const dbMessage =req.body
    message.create(dbMessage,(error,data)=>{
        if (error) {
            res.status(500).send(error)
        }
        if(data){
            res.status(201).json({message:'new message created' , data:data});
        }
    })
})

//DISPLAY ALL MESSAGES:
router.get('/show',(req, res)=>{
    message.find({})
    .exec((error ,data)=>{
        if(error){
            res.status(500).json(error);
        }
        if(data){
            res.status(200).json(data);
        }
    })
})



module.exports = router;
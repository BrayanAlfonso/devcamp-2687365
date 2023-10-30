const express = require('express')
const bootcampModel = require ('../models/bootcampModel')
const router = express.Router()

router.get('/', async (req, res)=>{
    //Traigo todos los bootcamps
    const bootcamps= await bootcampModel.find()
    res.json({
        success:true,
        data:bootcamps
    })  
})

router.get('/:id', async(req, res)=>{
    //Trer bootcamp por id
    const bootcamp = await bootcampModel.findById(req.params.id)
    res.json({
        success:true,
        data:bootcamp
    })  
})

router.post('/', async(req, res)=>{
    //Registrar nuevo bootcamp
    const newBootcamp = await bootcampModel.create(req.body)
    res.json({
        success:true,
        data:newBootcamp
    })  
})

router.put('/:id', async(req, res)=>{
    const updateBootcamp = await bootcampModel.updateOne(bootcampModel.findByIdAndUpdate(req.params.id,req.body))
    res.json({
        success:true,
        data: updateBootcamp
    })  
})

router.delete('/:id', async(req, res)=>{
    const deleteBootcamp = await bootcampModel.deleteOne(bootcampModel.findById(req.params.id))
    res.json({
        success:true,
        data:deleteBootcamp
    })  
})

module.exports= router

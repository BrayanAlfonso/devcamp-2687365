const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.json({
        success:true,
        msg:'aqui se traeran todos los cursos'
    })  
})

router.get('/:id', function(req, res){
    res.json({
        success:true,
        msg:`aqui se traera el curso cuyo id es: ${req.params.id}`
    })  
})

router.post('/', function(req, res){
    res.json({
        success:true,
        msg:`aqui se creara un curso`
    })  
})

router.put('/:id', function(req, res){
    res.json({
        success:true,
        msg:`aqui se editará el curso cuyo id es: ${req.params.id}`
    })  
})

router.delete('/:id', function(req, res){
    res.json({
        success:true,
        msg:`aqui se eliminará el curso cuyo id es: ${req.params.id}`
    })  
})

module.exports= router

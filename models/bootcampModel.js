const mongoose = require('mongoose')

//Definie un modelo que solo trabaje con mongo
const bootcampSchema = new mongoose.Schema({
    name: {
        type:String,
        unique: true,
        required:[true,"El bootcamp esta repetido"],
        maxlength:[20,"El nombre del bootcamp supera el limite de caracteres (20)"]
    },
    phone: {
        type:Number,
        unique: true,
        required:[true,"El númro e telefono esta repetido"],
        maxlength:[10,"El número de telefono supera el limite de caracteres (10)"]
    },
    address: {
        type:String,
        required:[true,"Dirección requerida"],
    },
    topics: {
        type:[String],
        enum:["Artificial Inteligence","Backend","Frontend","Devops"]
    },
    averageRating: Number,
    createdAt: {
        type:Date,
        required:[true, "Fecha de creación requerida"]
    }
})

const Bootcamp = mongoose.model("Bootcamp",bootcampSchema)

module.exports = Bootcamp
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

//Definie un modelo que solo trabaje con mongo
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        unique: true,
        required:[true,"Se requiere nombre del usuario"],
        maxlength:[20,"El nombre del usuario supera el limite de caracteres (20)"]
    },
    email: {
        type:String,
        unique: true,
        required:[true,"Es requeriddo el correo"],
        
    },
    address: {
        type:String,
        required:[true,"Dirección requerida"],
    },
    rol: String,
    password: {
        type:String,
        required:["La contraseña es requerida"]
    }
})

userSchema.pre('save', async function(next){
    //General la sal para el password

    const sal = await bcryptjs.genSalt(3)

    //Crear la clave encriptada con la sal
    this.password = await bcryptjs.hash(this.password,sal)
})
 userSchema.methods.compararPassword = async function(password){
    return await bcryptjs.compare(password,this.password)
 }

const User = mongoose.model("User",userSchema)

module.exports = User
const express = require ('express');
const dotenv = require ('dotenv');
const colors = require ('colors');
const bootcampsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')

//Construir el objeto de la aplicación
const app= express();
app.use('/bootcamps',bootcampsRoutes)
app.use('/courses', coursesRoutes)

//Configurar variables de entorno
dotenv.config(
    {path: './config/.env'}
)

//Prueba de la url
app.get('/prueba', function(req,res){
    res.send('Hola:3')
});

//Prueba de ruta parametrizada
app.get('/prueba/:id', function(req,res){
    res.send(`Parametro enviado: ${req.params.id}`)
});




//Tomar una variable puerto del entorno (.env)
const puerto= process.env.PUERTO


//Servidor de desarrollo
app.listen(puerto, function(){
    console.log(`Servidor ejecutando...${puerto}`.bgBlack.blue)
})
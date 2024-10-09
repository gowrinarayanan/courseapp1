const express=require ('express');
const app=express();
const morgan = require('morgan');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const courseRoutes=require('./model/courseData')
app.use('/courses',courseRoutes)
//const bodyParser=require('bodyParser');
require('dotenv').config()
dotenv.config()
app.use(morgan('dev'));
require('./db/connection')
//app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
require('./db/connection');


const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

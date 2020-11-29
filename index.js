// imports
const express = require('express')

const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv');

// interact with json data
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

const routes = require('./src/routes/app')
const mongoose = require('./config/mongodb')


app.use('/', routes)




app.listen(3000, () => {
  console.log('Server is running')
})

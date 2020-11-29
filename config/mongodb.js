const mongoose = require('mongoose')
const mongoUri = require('./app');
mongoose.connect(mongoUri.dbUri, {
    useNewUrlParser: true ,
   useUnifiedTopology: true
 }
)
 
mongoose.connection.on('connected', () => {
    console.log('connected to database')
  })
  
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));

module.exports = mongoose
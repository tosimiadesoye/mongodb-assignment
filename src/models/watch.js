const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Watch= new Schema({  
    name: String,
    _id: Object
})

const movie = mongoose.model("Watch", Watch);
module.exports = movie
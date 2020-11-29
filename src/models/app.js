const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    year: Number,
    rated: String,
    runtime: Number,
    countries: Array,
    genres: Array,
    director: String,
    writers: Array,
    actors: Array,
    plot: String,
    poster: String,
    imdb: Object,
    tomato: Object,
    metacritic: Number,
    awards: Object,
    type: String

})
// MovieSchema.plugin(aggregatePaginate);
const movie = mongoose.model("Films", MovieSchema);
module.exports = movie
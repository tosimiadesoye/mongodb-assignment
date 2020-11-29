

const movie = require('../models/app');

exports.film = new movie({
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
});


// }
//  app.get('/api/films', async(req, res) => {
    
//    console.log(req.body)
//    //const { page = 1, limit = 10 } = req.query;
  
   
//    try {
//     const nPerPage = req.query.nPerPage ? parseInt(req.query.nPerPage) : 10;
//      const pageNo = req.query.page ? parseInt(req.query.pageNo) : 1
//      console.log(nPerPage)
//      console.log(pageNo)
//        const paginate = await client.db('movie').collection('films').find({},{}, (error, result) => {
//          if (error) throw error;
//          console.log(result.name)
//        })
//         //  .toArray()
//        .limit(nPerPage * 1)
//          .skip((pageNo - 1) * nPerPage)
//        .exec()
//      console.log(paginate)
//        res.status(200).json({
//            doc: 'this is your res',
//            paginate: paginate
             
//          })
//      } catch (err){
//          res.status(400).json({
//              error:err.message
//          })
//      }

// })
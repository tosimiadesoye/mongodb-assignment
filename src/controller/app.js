

const movie = require('../models/app');

exports.film = new movie({

          title: req.body.title,
          year: req.body.year,
          rated: req.body.rated,
          runtime: req.body.runtime,
          countries: req.body.countries,
          genres: req.body.genres,
          director: req.body.director,
          writers: req.body.writers,
          actors: req.body.actors,
          plot: req.body.plot,
          poster: req.body.poster,
          imdb: req.body.imdb,
          tomato: req.body.tomato,
          metacritic: req.body.matacritic,
          awards: req.body.awards,
          type: req.body.type
});

modules.ex
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
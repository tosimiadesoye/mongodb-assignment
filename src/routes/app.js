const films = require('../models/app');
const router = require('express').Router();
const watch = require('../models/watch');

//works 
router.get('/api/films/:pId', async(req, res) => {
    //destructuring page and limit and the set default values
    console.log(req.params.pId, "your pId")
    const { page = req.params.pId, limit = 10 } = parseInt(req.query);
    
    try {
        
    // execute query with page and limit values
        const paginate = await films.find({})
        .sort({title:'asc'}) 
        .limit(limit)
        .skip(page * limit)
        .exec();
        

        res.status(200).json({
            paginate: paginate
        })
    } catch(error){
        res.status(400).json({
            status: false,
            err: error.message
       }) 
    }
   
})


//works 
router.get('/film/actor', async (req, res) => {
    const keyword = req.query.keyword;
    try {
        const film = await films.find({ title: { $regex: keyword, $options: 'i' } }) //i for case insensitive
        res.status(200).json({
            status: true,
            res: film
        })
    } catch (err) {
        res.status(400).json({
            status: true,
            error: err.message
        })
       
    }

});

//works
router.post('/watch', (req, res) => {
    try {
        const newFilm = watch.create({
            "_id": "0eafaadje5fad",
            "name": "The wizard of Oz"
        }, (err, newFilm) => {
            if (err) return console.error(err);
            console.log(newFilm)
        })
        res.status(200).json({
            status: true,
            collection: newFilm 
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            error: err.message
        })
    }
    
})

//works
router.get('/watch/:pId', async (req, res) => {
    const { page = req.params.pId, limit = 10 } = parseInt(req.query);
    try {
        
    // execute query with page and limit values
        const films = await watch.find({})
        .limit(limit)
        .skip(page * limit)
        .exec();
        
   
        res.status(200).json({
            status: true,
            films: films
        })
    } catch(error){
        res.status(400).json({
            status: false,
            err: error.message
       }) 
    }
   
 
});
 

//works
router.delete('/watch/:id', async (req, res) => {
    try {
        let _id = req.params.id
        let newId = await watch.findByIdAndDelete(_id, (err, id) => {
            if(err) console.error(err)
        })
        res.status(200).json({
            status: true,
            doc: newId
        })
    } catch (err){
        res.status(400).json({
            status: false,
            doc: err.message
        })
    }
})
module.exports = router;

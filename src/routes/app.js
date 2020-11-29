const films = require('../models/app');
const router = require('express').Router();
const  watch = require('../models/watch');
router.get('/api/films', async(req, res) => {
    //destructuring page and limit and the set default values
    const { page = 1, limit = 10 } = req.query;
    try {
        
    // execute query with page and limit values
        const films = await films.find()
        .sort({title:1}) 
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
        
    // get total documents in the Posts collection
        const count = await films.countDocuments();
        res.status(200).json({
            films,
            totalPages: films.ceil(count / limit),
            currentPage: page
        })
    } catch(error){
        res.status(400).json({
            status: false,
            err: error.message
       }) 
    }
   
})

router.get('/film/actor', async (req, res) => {
    const keyword = req.params.keyword;
    try {
        const film = await films.find({ title: { $regex: keyword, $options: $i } }) //i for case insensitive
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

})
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
            error: err.msg
        })
    }
    
})

router.get('/watch', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        
    // execute query with page and limit values
        const films = await watch.find({})
        .sort({title:1}) 
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
        
    // get total documents in the Posts collection
        const count = await films.countDocuments();
        res.status(200).json({
            films,
            totalPages: films.ceil(count / limit),
            currentPage: page
        })
    } catch(error){
        res.status(400).json({
            status: false,
            err: error.message
       }) 
    }
   
    
})
 
router.delete('/watch', async (req, res) => {
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

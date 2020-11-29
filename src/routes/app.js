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

router.post('/watch', (req, res) => { 
    watch.create({
        "_id": "0eafaadje5fad",
        "name": "The wizard of Oz"
    }, (err, newFilm)=>{
            if (err) return console.error(err);
        console.log(newFilm)
    })
})

router.get('/watch', async (req, res) => {
    
    await watch.find({}).exec()
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

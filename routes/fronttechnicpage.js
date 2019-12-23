const {Router} = require('express')
const LGZT = require('../models/fronttechnic_unit')
const XCMG  = require('../models/xcmgfronttechnicunits')
const router = Router()

// router.get('/add', async (req,res)=> {
//     const xcmgUnit = new XCMG ({
//         title : "LZ" ,
//         description: "llfl",
//         price: 1234,
//         weightLift: 12 ,
//         bucketCapacity: 12 
//     })
//     await xcmgUnit.save()
//     res.redirect('/')
// })
router.get('/filterTons/:kgs', async (req,res)=> {
    try{
        const lgzts = await LGZT.find().where('weightLift').gt(req.params.kgs)
        .select('title price description  bucketCapacity weightLift')
        const xcmgs = await XCMG.find().where('weightLift').gt(req.params.kgs)
        .select('title description price weightLift bucketCapacity')
        res.status(200)
        res.render('fronttechnicpage',{
            lgzts,
            xcmgs
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/filterBucket/:capacity', async (req,res)=> {
    try{
        const lgzts = await LGZT.find().where('bucketCapacity').gt(req.params.capacity)
        .select('title price description  bucketCapacity weightLift')
        const xcmgs = await XCMG.find().where('bucketCapacity').gt(req.params.capacity)
        .select('title description price weightLift bucketCapacity')
        res.status(200)
        res.render('fronttechnicpage',{
            lgzts,
            xcmgs
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/', async (req,res)=>{
    try{
        const lgzts = await LGZT.find()
        .select('title price description  bucketCapacity weightLift')
        const xcmgs = await XCMG.find()
        .select('title description price weightLift bucketCapacity')
        res.status(200)
        res.render('fronttechnicpage',{
            lgzts,
            xcmgs
        })
        
    } catch(err){
        console.log(err)
    }  
})

router.get("/:id", async(req,res)=>{
    try{
        const front = await LGZT.findById(req.params.id)
        const xcmg = await XCMG.findById(req.params.id)
     
        res.status(200)
        res.render('carpage',{
            front,
            xcmg
        })
    } catch (err){
        console.log(err)
    }
})

module.exports = router
const {Router} = require('express')
const FRONT = require('../models/fronttechnic_unit')
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
        const lgzts = await FRONT.find({brand: "LGZT"}).where('weightLift').gt(req.params.kgs)
        .select('title price description  bucketCapacity weightLift')
        const xcmgs = await FRONT.find({brand: 'XCMG'}).where('weightLift').gt(req.params.kgs)
        .select('title price description  bucketCapacity weightLift')
        const xgmas = await FRONT.find({brand: 'XGMA'}).where('weightLift').gt(req.params.kgs)
        .select('title price description  bucketCapacity weightLift')
        const brenners = await FRONT.find({brand: 'brenner'}).where('weightLift').gt(req.params.kgs)
        .select('title price description  bucketCapacity weightLift')
        const lonkings = await FRONT.find({brand: 'lonking'}).where('weightLift').gt(req.params.kgs)
        .select('title price description  bucketCapacity weightLift')
        res.status(200)
        res.render('fronttechnicpage',{
            lgzts,
            xcmgs,
            xgmas,
            brenners,
            lonkings
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/filterBucket/:capacity', async (req,res)=> {
    try{
        const lgzts = await FRONT.find({brand: "LGZT"}).where('bucketCapacity').gt(req.params.capacity)
        .select('title price description  bucketCapacity weightLift')
        const xcmgs = await FRONT.find({brand: "XCMG"}).where('bucketCapacity').gt(req.params.capacity)
        .select('title price description  bucketCapacity weightLift')
        const xgmas = await FRONT.find({brand: "XGMA"}).where('bucketCapacity').gt(req.params.capacity)
        .select('title price description  bucketCapacity weightLift')
        const brenners = await FRONT.find({brand: "brenner"}).where('bucketCapacity').gt(req.params.capacity)
        .select('title price description  bucketCapacity weightLift')
        const lonkings = await FRONT.find({brand: "lonking"}).where('bucketCapacity').gt(req.params.capacity)
        .select('title price description  bucketCapacity weightLift')
        res.status(200)
        res.render('fronttechnicpage',{
            lgzts,
            xcmgs,
            xgmas,
            brenners,
            lonkings
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/', async (req,res)=>{
    try{
        const lgzts = await FRONT.find({brand: "LGZT"})
        .select('title price description  bucketCapacity weightLift')
        const xcmgs = await FRONT.find({brand: 'XCMG'})
        .select('title description price weightLift bucketCapacity')
        const xgmas = await FRONT.find({brand: 'XGMA'})
        .select('title description price weightLift bucketCapacity')
        const brenners = await FRONT.find({brand: 'brenner'})
        .select('title description price weightLift bucketCapacity')
        const lonkings = await FRONT.find({brand: 'lonking'})
        .select('title description price weightLift bucketCapacity')
        
        res.status(200)
        res.render('fronttechnicpage',{
            lgzts,
            xcmgs,
            xgmas,
            brenners,
            lonkings
        })
        
    } catch(err){
        console.log(err)
    }  
})

router.get("/:id", async(req,res)=>{
    try{
        const front = await FRONT.findById(req.params.id)
     
        res.status(200)
        res.render('carpage',{
            front
        })
    } catch (err){
        console.log(err)
    }
})

module.exports = router
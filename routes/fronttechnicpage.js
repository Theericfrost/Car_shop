const {Router} = require('express')
const FRONT = require('../models/fronttechnic_unit')
const router = Router()


router.post('/filter', async (req,res)=> {
    try{
        
        const weightLift = req.body.group1
        
        let lgzts, xcmgs, xgmas , brenners , lonkings , liugongs, sdlgs, cats, fotons, shantui ;
        if (weightLift == "moreThan5000" ) {
            lgzts = await FRONT.find({brand: "LGZT"}).where('weightLift').gt(5000)
            .select('title price description  bucketCapacity weightLift')
            xcmgs = await FRONT.find({brand: "XCMG"}).where('weightLift').gt(5000)
            .select('title price description  bucketCapacity weightLift')
            xgmas = await FRONT.find({brand: 'XGMA'}).where('weightLift').gt(5000)
            .select('title price description  bucketCapacity weightLift')
            brenners = await FRONT.find({brand: 'brenner'}).where('weightLift').gt(5000)
            .select('title price description  bucketCapacity weightLift')
            lonkings = await FRONT.find({brand: 'lonking'}).where('weightLift').gt(5000)
            .select('title price description  bucketCapacity weightLift')
            liugongs = await FRONT.find({brand: 'Liugong'}).where('weightLift').gt(5000)
            .select('title description price weightLift bucketCapacity')
            sdlgs = await FRONT.find({brand: 'SDLG'}).where('weightLift').gt(5000)
            .select('title description price weightLift bucketCapacity')
            cats = await FRONT.find({brand: 'CAT'}).where('weightLift').gt(5000)
            .select('title description price weightLift bucketCapacity')
            fotons = await FRONT.find({brand: 'Foton Lovol'}).where('weightLift').gt(5000)
            .select('title description price weightLift bucketCapacity')
            shantui = await FRONT.find({brand: 'Shantui'}).where('weightLift').gt(5000)
            .select('title description price weightLift bucketCapacity')
        } else if(weightLift == 5000){
            lgzts = await FRONT.find({brand: "LGZT"}).where('weightLift').lte(weightLift).gt(3000)
            .select('title price description  bucketCapacity weightLift')
            xcmgs = await FRONT.find({brand: "XCMG"}).where('weightLift').lte(weightLift).gt(3000)
            .select('title price description  bucketCapacity weightLift')
            xgmas = await FRONT.find({brand: 'XGMA'}).where('weightLift').lte(weightLift).gt(3000)
            .select('title price description  bucketCapacity weightLift')
            brenners = await FRONT.find({brand: 'brenner'}).where('weightLift').lte(weightLift).gt(3000)
            .select('title price description  bucketCapacity weightLift')
            lonkings = await FRONT.find({brand: 'lonking'}).where('weightLift').lte(weightLift).gt(3000)
            .select('title price description  bucketCapacity weightLift')
            liugongs = await FRONT.find({brand: 'Liugong'}).where('weightLift').lte(weightLift).gt(3000)
            .select('title description price weightLift bucketCapacity')
            sdlgs = await FRONT.find({brand: 'SDLG'}).where('weightLift').lte(weightLift).gt(3000)
            .select('title description price weightLift bucketCapacity')
            cats = await FRONT.find({brand: 'CAT'}).where('weightLift').lte(weightLift).gt(3000)
            .select('title description price weightLift bucketCapacity')
            fotons = await FRONT.find({brand: 'Foton Lovol'}).where('weightLift').lte(weightLift).gt(3000)
            .select('title description price weightLift bucketCapacity')
            shantui = await FRONT.find({brand: 'Shantui'}).where('weightLift').lte(weightLift).gt(3000)
            .select('title description price weightLift bucketCapacity')
        }else {
            lgzts = await FRONT.find({brand: "LGZT"}).where('weightLift').lte(weightLift)
            .select('title price description  bucketCapacity weightLift')
            xcmgs = await FRONT.find({brand: "XCMG"}).where('weightLift').lte(weightLift)
            .select('title price description  bucketCapacity weightLift')
            xgmas = await FRONT.find({brand: 'XGMA'}).where('weightLift').lte(weightLift)
            .select('title price description  bucketCapacity weightLift')
            brenners = await FRONT.find({brand: 'brenner'}).where('weightLift').lte(weightLift)
            .select('title price description  bucketCapacity weightLift')
            lonkings = await FRONT.find({brand: 'lonking'}).where('weightLift').lte(weightLift)
            .select('title price description  bucketCapacity weightLift')
            liugongs = await FRONT.find({brand: 'Liugong'}).where('weightLift').lte(weightLift)
            .select('title description price weightLift bucketCapacity')
            sdlgs = await FRONT.find({brand: 'SDLG'}).where('weightLift').lte(weightLift)
            .select('title description price weightLift bucketCapacity')
            cats = await FRONT.find({brand: 'CAT'}).where('weightLift').lte(weightLift)
            .select('title description price weightLift bucketCapacity')
            fotons = await FRONT.find({brand: 'Foton Lovol'}).where('weightLift').lte(weightLift)
            .select('title description price weightLift bucketCapacity')
            shantui = await FRONT.find({brand: 'Shantui'}).where('weightLift').lte(weightLift)
            .select('title description price weightLift bucketCapacity')
        }
       
        res.status(200)
        res.render('fronttechnicpage',{
            lgzts,
            xcmgs,
            xgmas,
            brenners,
            lonkings,
            liugongs,
            sdlgs,
            cats,
            fotons,
            shantui
        })
       
     
    } catch(err) {
        console.log(err)
    }
})

// router.get('/filterBucket/:capacity', async (req,res)=> {
//     try{
//         const lgzts = await FRONT.find({brand: "LGZT"}).where('bucketCapacity').gt(req.params.capacity)
//         .select('title price description  bucketCapacity weightLift')
//         const xcmgs = await FRONT.find({brand: "XCMG"}).where('bucketCapacity').gt(req.params.capacity)
//         .select('title price description  bucketCapacity weightLift')
//         const xgmas = await FRONT.find({brand: "XGMA"}).where('bucketCapacity').gt(req.params.capacity)
//         .select('title price description  bucketCapacity weightLift')
//         const brenners = await FRONT.find({brand: "brenner"}).where('bucketCapacity').gt(req.params.capacity)
//         .select('title price description  bucketCapacity weightLift')
//         const lonkings = await FRONT.find({brand: "lonking"}).where('bucketCapacity').gt(req.params.capacity)
//         .select('title price description  bucketCapacity weightLift')
//         res.status(200)
//         res.render('fronttechnicpage',{
//             lgzts,
//             xcmgs,
//             xgmas,
//             brenners,
//             lonkings
//         })
//     } catch(err) {
//         console.log(err)
//     }
// })

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
        const liugongs = await FRONT.find({brand: 'Liugong'})
        .select('title description price weightLift bucketCapacity')
        const sdlgs = await FRONT.find({brand: 'SDLG'})
        .select('title description price weightLift bucketCapacity')
        const cats = await FRONT.find({brand: 'CAT'})
        .select('title description price weightLift bucketCapacity')
        const fotons = await FRONT.find({brand: 'Foton Lovol'})
        .select('title description price weightLift bucketCapacity')
        const shantui = await FRONT.find({brand: 'Shantui'})
        .select('title description price weightLift bucketCapacity')
        
        res.status(200)
            res.render('fronttechnicpage',{
                lgzts,
                xcmgs,
                xgmas,
                brenners,
                lonkings,
                liugongs,
                sdlgs,
                cats,
                fotons,
                shantui
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
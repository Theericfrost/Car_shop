const {Router} = require('express')
const Water = require('../models/watertechnic_unit')
const router = Router();

router.get('/', async (req,res)=>{
    try{
        const shacmans = await Water.find({brand: "Shacman"})
        const fotons = await Water.find({brand: "Foton"})
        const dongfengs = await Water.find({brand: "Dongfeng"})
        res.status(200)
        res.render("watertechnicpage",{
            shacmans,
            fotons,
            dongfengs
        })
    } catch(err){
        console.log(err)
    }
})


router.get("/:id", async(req,res)=>{
    try{
        const water = await Water.findById(req.params.id)
     
        res.status(200)
        res.render('watercarpage',{
            water
        })
    } catch (err){
        console.log(err)
    }
})

module.exports = router;
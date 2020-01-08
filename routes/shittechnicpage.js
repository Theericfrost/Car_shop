const {Router} = require('express')
const Shit = require('../models/shittechnic_unit')
const router = Router();

router.get('/', async (req,res)=>{
    try{
        const dfacs = await Shit.find({brand: "DFAC"})
        const fotons = await Shit.find({brand: "Foton"})
        const dongfengs = await Shit.find({brand: "Dongfeng"})
        const sinotruks = await Shit.find({brand: "HOWO"})
        const shacmans = await Shit.find({brand: "Shacman"})

        res.status(200)
        res.render("shittechnicpage",{
            dfacs,
            fotons,
            dongfengs,
            sinotruks,
            shacmans
        })
    } catch(err){
        console.log(err)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const shit = await Shit.findById(req.params.id)
     
        res.status(200)
        res.render('shitcarpage',{
            shit
        })
    } catch (err){
        console.log(err)
    }
})

module.exports = router;
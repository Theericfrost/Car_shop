const {Router} = require('express')
const GARBAGE = require('../models/garbagetechnic_unit')
const router = Router();

router.get('/', async (req,res)=>{
    try{
        const ivecos = await GARBAGE.find({brand: "IVECO"})
        const dongfengs = await GARBAGE.find({brand: "Dongfeng"})
        const howos = await GARBAGE.find({brand: "HOWO"})
        res.status(200)
        res.render("garbagetechnicpage",{
            ivecos,
            dongfengs,
            howos
        })
    } catch(err){
        console.log(err)
    }
})

// router.get('/add', async (req,res)=> {
//     const xcmgUnit = new GARBAGE ({
//         title : "ZZ5250ZYSA" ,
//         description: "задняя загрузка",
//         price: 33500000,
//         brand: "HOWO",
//         bodyVolume: 20 
        
//     })
//     await xcmgUnit.save()
//     res.redirect('/')
// })

router.get("/:id", async(req,res)=>{
    try{
        const garbage = await GARBAGE.findById(req.params.id)
     
        res.status(200)
        res.render('garbagecarpage',{
            garbage
        })
    } catch (err){
        console.log(err)
    }
})

module.exports = router;
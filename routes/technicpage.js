const {Router} = require('express')
const Front = require('../models/fronttechnic_unit')
const router = Router()



router.get('/', async (req,res)=>{
    try{

        const fronts = await Front.find()
        .select('title price description img')
        res.status(200)
        res.render('bildtechnicpage',{
            fronts
        })
        
    } catch(err){
        console.log(err)
    }  
})

router.get("/:id", async(req,res)=>{
    try{
        const front = await Front.findById(req.params.id)
        res.status(200)
        res.render('carpage',{
            front
        })
    } catch (err){

    }
})

module.exports = router
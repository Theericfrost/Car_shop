const {Router} = require('express')
const Front = require('../models/fronttechnic_unit')
const router = Router()



router.get('/', async (req,res)=>{
   
    try{
        res.status(200)
        res.render('technicpage',{

        })
    }catch(err){
        console.log(err)
    }
})


module.exports = router
const {Router} = require('express')
const router = Router()



router.get('/', async (req,res)=>{
   
    try{
        res.status(200)
        res.render('roadpage',{

        })
    }catch(err){
        console.log(err)
    }
})


module.exports = router
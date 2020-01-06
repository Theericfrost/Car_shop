const {Router} = require('express')
const router = Router()



router.get('/', async (req,res)=>{
   
    try{
        res.status(200)
        res.render('comunalpage',{

        })
    }catch(err){
        console.log(err)
    }
})


module.exports = router
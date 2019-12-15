const {Router} = require('express');
const router = Router();

router.get('/', (req,res)=>{
    try {
        res.status(200)
        res.render('main', {

        })
    } catch (err){
        console.log(err)
    }
    
})

module.exports = router
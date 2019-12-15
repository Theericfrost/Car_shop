const {Router} = require('express')
const Front = require('../models/fronttechnic_unit')
const router = Router()

router.get('/',(req,res)=>{
    try {
        res.status(200)
        res.render('add', {

        })
    } catch(err){
        console.log(err)
    }
    
})

router.post('/', async (req,res)=>{
    const front = new Front({
        title : req.body.title,
        price: req.body.price,
        description : req.body.description,
        img: req.body.img,
        motor: req.body.motor,
        fullPower : req.body.fullPower,
        netPower: req.body.netPower,
        operatingWeight:  req.body.operatingWeight,
        bucketCapacity: req.body.bucketCapacity,
        breakingForce: req.body.breakingForce,
        dischargeHeight: req.body.dischargeHeight,
        maxDischargeHeight: req.body.maxDischargeHeight,
        movementSpeedForward: req.body.movementSpeedForward,
        movementSpeedBack: req.body.movementSpeedBack,
        gearsForward: req.body.gearsForward,
        gearsBack: req.body.gearsBack,
        lengthWithBucketDown: req.body.lengthWithBucketDown,
        widthWithTires: req.body.widthWithTires,
        wheelsBase: req.body.wheelsBase,
        track: req.body.track,
        clearance : req.body.clearance
    })
    try{
        await front.save()
        res.redirect("/")
    }catch(err){
        console.log(err)
    }
})

module.exports = router
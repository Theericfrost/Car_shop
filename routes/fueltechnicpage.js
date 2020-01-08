const {Router} = require('express')
const Fuel = require('../models/fueltechnic_unit')
const router = Router();

router.get('/', async (req,res)=>{
    try{
        const jacs = await Fuel.find({brand: "JAC"})
        const fotons = await Fuel.find({brand: "Foton"})
        const dongfengs = await Fuel.find({brand: "Dongfeng"})
        const sinotruks = await Fuel.find({brand: "HOWO"})
        res.status(200)
        res.render("fueltechnicpage",{
            jacs,
            fotons,
            dongfengs,
            sinotruks
        })
    } catch(err){
        console.log(err)
    }
})

// router.get('/add', async (req,res)=> {
//     // const jac1 = new Fuel ({
//     //     title : "CLW 10 куб" ,
//     //     description: "Заправочное оборудование",
//     //     price: 43000,
//     //     brand: "JAC",
//     //     bodyVolume: 10 
        
//     // })
//     const jac2 = new Fuel ({
//         title : "Jac 12-15 куб" ,
//         description: "Заправочное оборудование",
//         price: 42500,
//         brand: "JAC",
//         bodyVolume: 12 
        
//     })
//     const dongfeng1 = new Fuel ({
//         title : "Dongfeng 10 куб" ,
//         description: "Заправочное оборудование",
//         price: 29800,
//         brand: "Dongfeng",
//         bodyVolume: 10 
        
//     })
//     const dongfeng2 = new Fuel ({
//         title : "Dongfeng 153 СAB" ,
//         description: "Заправочное оборудование",
//         price: 68700,
//         brand: "Dongfeng",
//         bodyVolume: 22 
        
//     })
//     const dongfeng3 = new Fuel ({
//         title : "Dongfeng Kingland СAB" ,
//         description: "Заправочное оборудование",
//         price: 74000,
//         brand: "Dongfeng",
//         bodyVolume: 22 
        
//     })
//     const dongfeng4 = new Fuel ({
//         title : "CLW 153 CAB" ,
//         description: "Заправочное оборудование",
//         price: 39000,
//         brand: "Dongfeng",
//         bodyVolume: 13 
        
//     })
//     const dongfeng5 = new Fuel ({
//         title : "CLW Kingrun СAB" ,
//         description: "Заправочное оборудование",
//         price: 49000,
//         brand: "Dongfeng",
//         bodyVolume: 13 
        
//     })
//     const dongfeng6 = new Fuel ({
//         title : "CLW 153 СAB" ,
//         description: "Заправочное оборудование",
//         price: 54200,
//         brand: "Dongfeng",
//         bodyVolume: 18 
        
//     })
//     const dongfeng7 = new Fuel ({
//         title : "CLW D913 СAB" ,
//         description: "Заправочное оборудование",
//         price: 56900,
//         brand: "Dongfeng",
//         bodyVolume: 18 
        
//     })
//     const dongfeng8 = new Fuel ({
//         title : "Dongfeng D916 СAB" ,
//         description: "Заправочное оборудование",
//         price: 57500,
//         brand: "Dongfeng",
//         bodyVolume: 25 
        
//     })
//     const dongfeng9 = new Fuel ({
//         title : "Dongfeng D153 СAB" ,
//         description: "Заправочное оборудование",
//         price: 55000,
//         brand: "Dongfeng",
//         bodyVolume: 25 
        
//     })
//     const foton1 = new Fuel ({
//         title : "CLW 3 куб" ,
//         description: "Заправочное оборудование",
//         price: 21800,
//         brand: "Foton",
//         bodyVolume: 3 
        
//     })
//     const foton2 = new Fuel ({
//         title : "FOTON 8-10 куб" ,
//         description: "Заправочное оборудование",
//         price: 38000,
//         brand: "Foton",
//         bodyVolume: 10 
        
//     })
//     const foton3 = new Fuel ({
//         title : "FOTON 15-17 куб" ,
//         description: "Заправочное оборудование",
//         price: 52000,
//         brand: "Foton",
//         bodyVolume: 15 
        
//     })
//     const sinotruk1 = new Fuel ({
//         title : "ZZ1167M4611" ,
//         description: "Заправочное оборудование",
//         price: 58500,
//         brand: "HOWO",
//         bodyVolume: 13 
        
//     })
//     const sinotruk2 = new Fuel ({
//         title : "ZZ1257N4641W 6x4" ,
//         description: "Заправочное оборудование",
//         price: 69800,
//         brand: "HOWO",
//         bodyVolume: 25 
        
//     })
//     const sinotruk3 = new Fuel ({
//         title : "ZZ1257N4641W 8x4" ,
//         description: "Заправочное оборудование",
//         price: 79300,
//         brand: "HOWO",
//         bodyVolume: 25 
//     })

//     // await jac1.save()
//     await jac2.save()
//     await dongfeng1.save()
//     await dongfeng2.save()
//     await dongfeng3.save()
//     await dongfeng4.save()
//     await dongfeng5.save()
//     await dongfeng6.save()
//     await dongfeng7.save()
//     await dongfeng8.save()
//     await dongfeng9.save()
//     await foton1.save()
//     await foton2.save()
//     await foton3.save()
//     await sinotruk1.save()
//     await sinotruk2.save()
//     await sinotruk3.save()
//     res.send('<h1> Загружено</h1>')
// })

router.get("/:id", async(req,res)=>{
    try{
        const fuel = await Fuel.findById(req.params.id)
     
        res.status(200)
        res.render('fuelcarpage',{
            fuel
        })
    } catch (err){
        console.log(err)
    }
})

module.exports = router;
const {Router} = require('express')
const nodemailer = require('nodemailer')

const router = Router()

router.get('/',(req,res)=>{
    try {
        res.status(200)
        res.render('request',{
            
        })
    } catch(err){
        console.log(err)
    }
  
})

router.post('/', (req,res)=>{
    res.status(200)
    
    try {    
     
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'theericfrosteric@gmail.com',
                pass: 'a1233ob1'
                // user: 'erlan.ktcinvesting@gmail.com',
                // pass: 'sapar12'
            }
        })
        
        let mailOptions = {
            //erlan.ktcinvesting@gmail.com sapar12
            from: "theericfrosteric@gmail.com", 
            to: 'erlan.ktcinvesting@gmail.com',
            subject: `Запрос от ${req.body.first_name}`,
            text: ` Заказчик ${req.body.first_name}; 
            Компания ${req.body.company_name ?  req.body.company_name: " не указана"}
            Телефон ${req.body.telephone}
            Email ${req.body.email ? req.body.email : " не указан"}
            Текст сообщения ${req.body.textarea}`
        }
        
        transporter.sendMail(mailOptions, (err,data)=>{
            if(err){
                console.log(err)
            } else {
                console.log(data)
            }
        })
       
    } catch (err){
        console.log(err)
    }
})    

module.exports = router
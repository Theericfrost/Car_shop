const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')
// const mongoStore = require('connect-mongodb-session')(session)

const mainRoutes = require('./routes/main')
const requestRoutes = require('./routes/request')
const technicpageRoutes = require('./routes/technicpage')
const fronttechnicpageRoutes = require('./routes/fronttechnicpage')
const menuRoutes = require('./routes/menu')

const ifEquals = require('./hbshelpers/ifEquals')

const PORT =  process.env.PORT || 3000;
const server = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname : 'hbs',
  helpers : { 
    ifEquals : ifEquals
  },
  partialsDir : path.join(__dirname, 'views/partials') ,
  
  
})



server.engine('hbs', hbs.engine)
server.set('view engine' , 'hbs');
server.set('views','views')

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({extended : true}))

server.use(helmet())
server.use(compression())

server.use('/', mainRoutes)
server.use('/request', requestRoutes)
server.use('/technicpage', technicpageRoutes)
server.use('/technicpage/fronttechnicpage', fronttechnicpageRoutes)

server.use('/menu', menuRoutes)



async function start(){
  try{
    
    await mongoose.connect( "mongodb+srv://admin_eric:a1233ob1@cluster0-opu5p.mongodb.net/technics_rent_shop" , {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useFindAndModify: false 
    })

    server.listen(PORT, ()=>{
      console.log(`Сервер запущен на порту ${PORT}`)
    })

  } catch(err){
    console.log(err)
  }
}
start();

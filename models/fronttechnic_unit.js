const {Schema, model} = require('mongoose')

const frontTechnicUnitSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },   
    brand: {
        type: String,
        required: true
    },
    weightLift: {
        type: Number,
        required: true
    },
    bucketCapacity: {
        type: Number,
        required: true
    }
    
})

module.exports = model('frontTechnicUnit', frontTechnicUnitSchema);
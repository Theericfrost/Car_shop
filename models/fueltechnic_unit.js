const {Schema, model} = require("mongoose");

const fuelTechnicUnitSchema = new Schema({
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
    bodyVolume : {
        type: Number,
        required: true
    }
})

module.exports = model('fuelTechnicUnit', fuelTechnicUnitSchema);
const {Schema, model} = require('mongoose')

const frontTechnicUnitSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
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
    weightLift: Number,
    bucketCapacity: Number,
    maxHeightDischarge: Number,
    rangeDischarge: Number,
    workTime: Number,
    maxLiftingForce: Number,
    minRadiusRotate: Number,
    speedMove: Number,
    angleRotation: Number,
    overallDimensions: String,
    bucketSize: String,
    wheelBase: Number,
    koleya: Number,
    minClearance: Number,
    operatingWeight: Number,
    enginetype: String,
    engine: String,
    power: Number,
    fuelConsumption: Number,
    hydraulicPressure: Number,
    wheel: String,
    controling: String,
    cabin: String,
    optionaly: String
    
})

module.exports = model('frontTechnicUnit', frontTechnicUnitSchema);
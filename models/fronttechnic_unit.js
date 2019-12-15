const {Schema, model} = require('mongoose')

const frontTechnicUnitSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: true
    },
    motor: String,
    fullPower : Number,
    netPower: Number,
    operatingWeight:  Number,
    bucketCapacity: Number,
    breakingForce: Number,
    dischargeHeight: Number,
    maxDischargeHeight: Number,
    movementSpeedForward: Number,
    movementSpeedBack: Number,
    gearsForward: Number,
    gearsBack: Number,
    lengthWithBucketDown: Number,
    widthWithTires: Number,
    wheelsBase: Number,
    track: Number,
    clearance : Number
})

module.exports = model('frontTechnicUnit', frontTechnicUnitSchema);
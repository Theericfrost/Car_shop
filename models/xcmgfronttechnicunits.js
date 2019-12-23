const {Schema,model} = require('mongoose')

const XCMGShema = new Schema({
    title : {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weightLift: {
        type: Number,
        required: true
    },
    bucketCapacity: {
        type: Number,
        required: true
    },
    operatingWeight: Number,
    maxLiftingForce: Number,
    loadTime: Number,
    cycleTime: Number,
    maxHeightDischarge: Number,
    rangeDischarge: Number,
    wheelBase: Number,
    radiusRotate: Number,
    forwardSpeedRange: String,
    backSpeedRange: String,
    overallDimensions: String,
    bucketSize: Number ,
    engine: String,
    cilinderNumber:  Number,
    workingVolume: Number,
    enginePower: String,
    fuelConsumption: String,
    controlling: String,
    cabin: String,
})


module.exports = model('XCMGfronttechnicunits', XCMGShema)
const mongoose = require('mongoose');


var waterbottleSchema = {
    brand: String,
    phLevel: Number,
    cost:Number,
    imageName:String,
    statement: String
}
var Waterbottle = mongoose.model('Waterbottle', waterbottleSchema);

module.exports = Waterbottle;

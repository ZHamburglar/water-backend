const mongoose = require('mongoose');


var waterbottleSchema = {
brand: String,
phLevel: Number,
cost:Number,
userId:String,
}
var Waterbottle = mongoose.model('Waterbottle', waterbottleSchema);

module.exports = Waterbottle;
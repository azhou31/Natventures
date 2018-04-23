let mongoose = require('mongoose');
let ProductSchema = new mongoose.Schema({
    name: {type:String, required: true},
    price: { type: Number, required: true}
},
    {timestampes:true});

module.exports = mongoose.model('Product', ProductSchema);
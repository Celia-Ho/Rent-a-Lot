var mongoose = require('mongoose');

var SpotSchema = new mongoose.Schema({
    address: String,
    postalcode: String,
    price: Number,
    type: String,
    description: String,
    contact: String,
    published_date: { type: Date},
    updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Spot', SpotSchema);
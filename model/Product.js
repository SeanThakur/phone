const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newProduct = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
    },
    color: {
        type: [String],
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model("products", newProduct);
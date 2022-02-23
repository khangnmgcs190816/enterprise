const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = new Schema(
    { 
        category_name: { type: String, required: true},
        used: { type: Number, default: 0 },
    },
    {
        timestamps : true,
    },
);

module.exports = mongoose.model('Category', Category);
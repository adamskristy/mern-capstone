const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ratingSchema = new Schema({ 
    cost: { type: String, required: true },
    type: {type: String, required: true },
    platform: { type: String, required: true },
    link: { type: String, required: true },
    title: { type: String, required: true },
    notes: { type: String, required: true },
    stars: {type: Number, max: 5, required: true},
    user: { type: String, required: true }
    
}, {timestamps: true })

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = Rating
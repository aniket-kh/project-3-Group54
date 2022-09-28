const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const reviewSchema = new mongoose.Schema({

    bookId: { type: ObjectId, required: true, ref: 'book', trim: true },
    reviewedBy: { type: String, required: true, default: 'Guest' },
    reviewedAt: { type: Date, required: true },
    rating: { type: Number, required: true },
    review: { type: String, trim: true },
    isDeleted: { type: Boolean, default: false },

}, { timestamps: true })



module.exports = mongoose.model('Review', reviewSchema)


const { Schema, model } = require('mongoose')

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    author: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    }
}, {timestamps: true})

module.exports = model('Message', schema)
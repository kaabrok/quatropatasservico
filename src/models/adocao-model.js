const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema  = new Schema({

    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Adotante'
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    visita: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Adocao', schema);

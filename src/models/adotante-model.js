const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema  = new Schema({

    name: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Adotante', schema);

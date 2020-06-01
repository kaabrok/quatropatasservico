const mongoose = require('mongoose');
const Adotante = mongoose.model('Adotante');

exports.post = (req, res, next) => {
    var adotante = new Adotante(req.body);
    adotante
        .save()
        .then(x => {
            res.status(201).send({ 
                message: 'Adotante cadastrado com sucesso!' });
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar o adotante!', data: e });
        });
};
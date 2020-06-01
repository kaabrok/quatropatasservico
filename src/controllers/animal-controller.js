const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

exports.getAnimaisFiltrados = (req, res, next) => {
    const especie = req.params.especie;
    const genero = req.params.genero;

    Animal
    .find({especie: especie, genero: genero})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getAnimais = () => {
    return Animal.find({});
};

exports.get = (req, res, next) => {
    Animal
    .find({})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getCachorro = (req, res, next) => {
    Animal
    .find({especie: 'cachorro'})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getCachorroMacho = (req, res, next) => {
    Animal
    .find({especie: 'cachorro', genero: 'macho'})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getCachorroFemea = (req, res, next) => {
    Animal
    .find({especie: 'cachorro', genero: 'femea'})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getGato = (req, res, next) => {
    Animal
    .find({especie: 'gato'})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getGatoMacho = (req, res, next) => {
    Animal
    .find({especie: 'gato', genero: 'macho'})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getGatoFemea = (req, res, next) => {
    Animal
    .find({especie: 'gato', genero: 'femea'})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getMacho = (req, res, next) => {
    Animal
    .find({genero: 'macho'})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getBySlug = (req, res, next) => {
    Animal
        .findOne({
            slug: req.params.slug,
            active: true
        }, 'title especie genero slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
};

exports.getByTag = (req, res, next) => {
    Animal
        .find({
            tags: req.params.tag,
            active: true
        }, 'title especie genero slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Animal
        .findById (req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
    var animal = new Animal(req.body);
    animal
        .save()
        .then(x => {
            res.status(201).send({ 
                message: 'Animal cadastrado com sucesso!' });
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar o animal', data: e });
        });
};

exports.put = (req, res, next) => {
    Animal
        .findOneAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                genero: req.body.genero
            }
        }).then(x => {
            res.status(200).send({ 
                message: 'Animal atualizado com sucesso!' 
            })
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao atualizar o animal', data: e 
            })
        });
};

exports.delete = (req, res, next) => {
    Animal
        .findOneAndRemove(req.body.id)
        .then(x => {
            res.status(200).send({ 
                message: 'Animal removido com sucesso!' });
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao remover o animal', data: e });
        });
};


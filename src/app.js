const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();


//conectar ao banco de dados
mongoose.connect('mongodb+srv://wilkinson:96595331@cluster0-gmkmt.mongodb.net/test?retryWrites=true&w=majority');

//Carregando os Modelos
const Animal = require('./models/animal-model');
const adotanteModel = require('./models/adotante-model');
const Adocao = require('./models/adocao-model');

//Carregando as rotas
const indexRoute = require ('./rotas/index-route');
const animalRoute = require ('./rotas/animal-route');
const adotanteRoute = require ('./rotas/adotante-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/animals', animalRoute);
app.use('/adotantes', adotanteRoute);


module.exports = app;

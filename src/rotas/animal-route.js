const express = require('express');
const router = express.Router();
const controller = require('../controllers/animal-controller');

router.get('/', controller.get);
router.get('/animais/:especie/:genero/', controller.getAnimaisFiltrados);
router.get('/macho/', controller.getMacho);
router.get('/cachorro/', controller.getCachorro);
router.get('/cachorro/macho', controller.getCachorroMacho);
router.get('/cachorro/femea', controller.getCachorroFemea);
router.get('/gato', controller.getGato);
router.get('/gato/macho', controller.getGatoMacho);
router.get('/gato/femea', controller.getGatoFemea);
router.get('/slug/:slug', controller.getBySlug);
router.get('/adm/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router

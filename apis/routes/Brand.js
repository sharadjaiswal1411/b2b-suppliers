const express = require('express');
const router = express.Router();
const BrandController = require('../Controllers/BrandController');

/* GET programming languages. */
router.get('/',BrandController.listAll);
router.get('/:id',BrandController.listAll);
router.post('/',BrandController.create);
router.put('/:id',BrandController.put);
router.delete('/:id',BrandController.deletelist);


module.exports = router;
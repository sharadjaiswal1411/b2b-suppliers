const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductController');

/* GET programming languages. */
router.get('/',ProductController.listAll);
router.get('/:id',ProductController.listAll);
router.post('/',ProductController.create);
router.put('/:id',ProductController.put);
router.delete('/:id',ProductController.deletelist);


module.exports = router;
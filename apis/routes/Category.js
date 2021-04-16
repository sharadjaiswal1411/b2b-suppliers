const express = require('express');
const router = express.Router();
const CategoryController = require('../Controllers/CategoryController');

/* GET programming languages. */
router.get('/',CategoryController.listAll);
router.get('/:id',CategoryController.listAll);
router.post('/',CategoryController.create);
router.put('/:id',CategoryController.put);
router.delete('/:id',CategoryController.deletelist);


module.exports = router;      
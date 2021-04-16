const express = require('express');
const router = express.Router();
const SupplierController = require('../Controllers/SupplierController');

/* GET programming languages. */
router.get('/',SupplierController.listAll);
router.get('/:id',SupplierController.listAll);
router.post('/',SupplierController.create);
router.put('/:id',SupplierController.put);
router.delete('/:id',SupplierController.deletelist);


module.exports = router;
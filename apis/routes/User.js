const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

/* GET programming languages. */
router.get('/',UserController.listAll);
router.get('/:id',UserController.listAll);
router.post('/',UserController.create);
router.put('/:id',UserController.put);
router.delete('/:id',UserController.deletelist);


module.exports = router;
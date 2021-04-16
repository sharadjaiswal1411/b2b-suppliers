const express = require('express');
const router = express.Router();
const SettingController = require('../Controllers/SettingController');

/* GET programming languages. */
router.get('/',SettingController.listAll);
router.get('/:id',SettingController.listAll);
router.post('/',SettingController.create);
router.put('/:id',SettingController.put);
router.delete('/:id',SettingController.deletelist);


module.exports = router;
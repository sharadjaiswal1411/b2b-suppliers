const express = require('express');
const router = express.Router();
const MetricController = require('../Controllers/MetricController');

/* GET programming languages. */
router.get('/',MetricController.listAll);
router.get('/:id',MetricController.listAll);
router.post('/',MetricController.create);
router.put('/:id',MetricController.put);
router.delete('/:id',MetricController.deletelist);



module.exports = router;


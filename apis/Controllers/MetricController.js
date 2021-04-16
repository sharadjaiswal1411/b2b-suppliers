const Metric = require('../Services/Metric');

/* GET programming language */
async function listAll(req, res, next) {
    try {
      res.json(await Metric.listRecords(req.query.page,req.query.limit));
    } catch (err) {
      console.error(`Error while getting metrics `, err.message);
      next(err);
    }
}

/* POST programming language */
async function create(req, res, next) {
    try {
     
        res.json(await Metric.saveRecord(req.body));
      } catch (err) {
        console.error(`Error while creating metric`, err.message);
        next(err);
      }
}

/* PUT programming language */
async function put(req, res, next) {
  try {
    res.json(await Metric.updateRecord(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Brand`, err.message);
    next(err);
  }
}

/* DELETE programming language */
async function deletelist (req, res, next) {
  try {
    res.json(await Metric.deleteRecord(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
};

module.exports = {
    listAll,
    create,
    put,
    deletelist
}

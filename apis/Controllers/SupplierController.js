const Supplier = require('../Services/Supplier');

/* GET programming language */
async function listAll(req, res, next) {
    try {
      res.json(await Supplier.listRecords(req.query.page,req.query.limit));
    } catch (err) {
      console.error(`Error while getting Supplier `, err.message);
      next(err);
    }
}

/* POST programming language */
async function create(req, res, next) {
    try {
        res.json(await Supplier.saveRecord(req.body));
      } catch (err) {
        console.error(`Error while creating Supplier`, err.message);
        next(err);
      }
}

/* PUT programming language */
 async function put(req, res, next) {
  try {
    res.json(await Supplier.updateRecord(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Supplier`, err.message);
    next(err);
  }
}

/* DELETE programming language */
async function deletelist (req, res, next) {
  try {
    res.json(await Supplier.deleteRecord(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Supplier`, err.message);
    next(err);
  }
};

module.exports = {
    listAll,
    create,
    put,
    deletelist
}

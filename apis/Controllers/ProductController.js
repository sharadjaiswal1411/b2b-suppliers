const Product = require('../Services/Product');

/* GET programming language */
async function listAll(req, res, next) {
    try {
      res.json(await Product.listRecords(req.query.page,req.query.limit));
    } catch (err) {
      console.error(`Error while getting Product `, err.message);
      next(err);
    }
}

/* POST programming language */
async function create(req, res, next) {
    try {
        res.json(await Product.saveRecord(req.body));
      } catch (err) {
        console.error(`Error while creating Product`, err.message);
        next(err);
      }
}
/* PUT programming language */
async function put(req, res, next) {
  try {
    res.json(await Product.updateRecord(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Product`, err.message);
    next(err);
  }
}

/* DELETE programming language */
async function deletelist (req, res, next) {
  try {
    res.json(await Product.deleteRecord(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Product`, err.message);
    next(err);
  }
};

module.exports = {
    listAll,
    create,
    put,
    deletelist
}

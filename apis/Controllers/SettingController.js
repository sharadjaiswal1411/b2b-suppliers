const Setting = require('../Services/Setting');

/* GET programming language */
async function listAll(req, res, next) {
    try {
      res.json(await Setting.listRecords(req.query.page,req.query.limit));
    } catch (err) {
      console.error(`Error while getting Setting `, err.message);
      next(err);
    }
}

/* POST programming language */
async function create(req, res, next) {
    try {
        res.json(await Setting.saveRecord(req.body));
      } catch (err) {
        console.error(`Error while creating Setting`, err.message);
        next(err);
      }
}

/* PUT programming language */
 async function put(req, res, next) {
  try {
    res.json(await Setting.updateRecord(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Setting`, err.message);
    next(err);
  }
}

/* DELETE programming language */
async function deletelist (req, res, next) {
  try {
    res.json(await Setting.deleteRecord(req.params.id));
  } catch (err) {
    console.error(`Error while deleting Setting`, err.message);
    next(err);
  }
};

module.exports = {
    listAll,
    create,
    put,
    deletelist
}

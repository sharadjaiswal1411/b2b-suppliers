const User = require('../Services/User');

/* GET programming language */
async function listAll(req, res, next) {
    try {
      res.json(await User.listRecords(req.query.page,req.query.limit));
    } catch (err) {
      console.error(`Error while getting User `, err.message);
      next(err);
    }
}

/* POST programming language */
async function create(req, res, next) {
    try {
        res.json(await User.saveRecord(req.body));
      } catch (err) {
        console.error(`Error while creating User`, err.message);
        next(err);
      }
}

/* PUT programming language */
 async function put(req, res, next) {
  try {
    res.json(await User.updateRecord(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating User`, err.message);
    next(err);
  }
}

/* DELETE programming language */
async function deletelist (req, res, next) {
  try {
    res.json(await User.deleteRecord(req.params.id));
  } catch (err) {
    console.error(`Error while deleting User`, err.message);
    next(err);
  }
};

module.exports = {
    listAll,
    create,
    put,
    deletelist
}

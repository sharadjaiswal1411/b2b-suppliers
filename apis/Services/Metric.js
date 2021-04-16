const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const table_name="metrics";




//GET list Table
async function listRecords(page=1,limit=config.listPerPage){
  const offset = helper.getOffset(page,limit);
  const rows = await db.query(
    `SELECT id, name 
    FROM ${table_name} LIMIT ?,?`, 
    [offset,limit]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

//GET for id
async function fetchRecord(id){
  const rows = await db.query(
    `SELECT id, name 
    FROM ${table_name} where id=?`, 
    [id]
  );
  const data =rows;
  
  return {
    data   
  }
}

//POST
async function saveRecord(record){
    const result = await db.query(
        `INSERT INTO  ${table_name}
        (name) 
        VALUES 
        (?)`, 
        [
            record.name
        ]
      );
    
      let message = 'Error in creating metric language';
    
      if (result.affectedRows) {
        message = 'Metric created successfully';
      }
    
      return {message};
  
}



/* PUT programming language */
async function updateRecord(id, record){
  const result = await db.query(
    `UPDATE ${table_name} 
    SET 
    name=?
    WHERE id=?`, 
    [
      record.name,id
    ]
  );

  let message = 'Error in updating metrics';

  if (result.affectedRows) {
    message = 'metric updated successfully';
  }

  return {message};
  
}


//Delete
async function deleteRecord(id){
  
  const result = await db.query(
    `DELETE FROM ${table_name} WHERE id=?`, 
    [id]
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'metrics deleted successfully';
  }

  return {message};
}



module.exports = {
    listRecords,
    saveRecord,
    updateRecord,
    fetchRecord,
    deleteRecord
  }
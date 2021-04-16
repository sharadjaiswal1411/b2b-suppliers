const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const table_name="brands";

/* GET programming language */

async function listRecords(page=1,limit=config.listPerPage){
  const offset = helper.getOffset(page,limit);
  const rows = await db.query(
    `SELECT id,
     name,about,logo,featured,meta_title,meta_description,status 
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

/* POST programming language */
async function saveRecord(record){
  const result = await db.query(
      `INSERT INTO  ${table_name}
      (name,about,logo,featured,meta_title,meta_description,status) 
      VALUES 
      (?,?,?,?,?,?,?)`, 
      [
          record.name,
          record.about,
          record.logo,
          record.featured,
          record.meta_title,
          record.meta_description,
          record.status
      ]
    );
  
    let message = 'Error in creating Brand language';
  
    if (result.affectedRows) {
      message = 'Brand created successfully';
    }
  
    return {message};

}

/* PUT programming language */
async function updateRecord(id, record){
  const result = await db.query(
    `UPDATE ${table_name} 
    SET  name=? , about=?,logo=?,featured=?,meta_title=?,
    meta_description=?,status=?
  
  WHERE id=?`,
    [
      record.name, 
      record.about,
      record.logo,
      record.featured,
      record.meta_title,
      record.meta_description,
      record.status,id
    ]
  );

  let message = 'Error in updating Brand';

  if (result.affectedRows) {
    message = 'Brand updated successfully';
  }

  return {message};
  
}

/* GET programming language */
async function fetchRecord(id){
  
  const rows = await db.query(`SELECT id, name,about FROM ${table_name} 
  where id=?`,
   [id]);
  const data =rows;
  
  return {
    data   
  }
}
/* DELETE programming language */
async function deleteRecord(id){
  
  const result = await db.query(`DELETE FROM ${table_name} WHERE id=?`,
   [id]);

  let message = 'Error in deleting Brand';

  if (result.affectedRows) {
    message = 'Brand deleted successfully';
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
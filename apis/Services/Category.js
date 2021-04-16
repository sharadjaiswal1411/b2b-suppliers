const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const table_name="categories";

//GET
async function listRecords(page=1,limit=config.listPerPage){
  const offset = helper.getOffset(page,limit);
  const rows = await db.query(
    `SELECT id, 
    name,description,meta_title,h1,meta_description,
    top_description,bottom_description,image,featured,status 
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
        (name,description,meta_title,h1,meta_description,top_description,
          bottom_description,image,featured,status) 
        VALUES 
        (?,?,?,?,?,?,?,?,?,?)`, 
        [
          record.name,
          record.description,
          record.meta_title,
          record.h1,
          record.meta_description,
          record.top_description,
          record.bottom_description,
          record.image,
          record.featured,
          record.status
        ]
      );
    
      let message = 'Error in creating category language';
    
      if (result.affectedRows) {
        message = 'category created successfully';
      }
    
      return {message};
  
}

/* PUT programming language */
async function updateRecord(id, record){
  const result = await db.query(
    `UPDATE ${table_name} 
    SET 
    name=?,description=?,meta_title=?,h1=?,meta_description=?,
    top_description=?,bottom_description=?,image=?,featured=?,status=?
    WHERE id=?`, 
    [
      record.name,
      record.description,
      record.meta_title,
      record.h1,
      record.meta_description,
      record.top_description,
      record.bottom_description,
      record.image,
      record.featured,
      record.status,
      id
    ]
  );

  let message = 'Error in updating category';

  if (result.affectedRows) {
    message = 'category updated successfully';
  }

  return {message};
  
}


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


//DELETE
async function deleteRecord(id){
  
  const result = await db.query(
    `DELETE FROM ${table_name} WHERE id=?`, 
    [id]
  );

  let message = 'Error in deleting category';

  if (result.affectedRows) {
    message = 'category deleted successfully';
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
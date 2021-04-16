const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const table_name="products";

/* GET programming language */

async function listRecords(page=1,limit=config.listPerPage){
  const offset = helper.getOffset(page,limit);
  const rows = await db.query(
    `SELECT id, 
    name,category_id,featured_categories,main_image,brand_id,supplier_id,
    meta_title,meta_description,
    price,metric_id,status
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
        (name,category_id,featured_categories,main_image,brand_id,
            supplier_id,meta_title,meta_description,
            price,metric_id,status) 
        VALUES 
        (?,?,?,?,?,?,?,?,?,?,?)`, 
        [
          record.name,
          record.category_id,
          record.featured_categories,
          record.main_image ,
          record.brand_id,
          record.supplier_id,
          record.meta_title,
          record.meta_description,
          record.price,
          record.metric_id,
          record.status
        ]
      );
    
      let message = 'Error in creating product';
    
      if (result.affectedRows) {
        message = 'product created successfully';
      }
    
      return {message};
  
}

/* PUT programming language */
async function updateRecord(id, record){
  const result = await db.query(
    `UPDATE ${table_name} 
    SET 
    name=?,category_id=?,featured_categories=?,main_image=?,brand_id=?,
    supplier_id=?,meta_title=?,meta_description=?,price=?,metric_id=?,status=?
    WHERE id=?`, 
    [
      record.name,
          record.category_id,
          record.featured_categories,
          record.main_image ,
          record.brand_id,
          record.supplier_id,
          record.meta_title,
          record.meta_description,
          record.price,
          record.metric_id,
          record.status,
      id
    ]
  );

  let message = 'Error in updating product';

  if (result.affectedRows) {
    message = 'product updated successfully';
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

async function deleteRecord(id){
  
  const result = await db.query(
    `DELETE FROM ${table_name} WHERE id=?`, 
    [id]
  );

  let message = 'Error in deleting product';

  if (result.affectedRows) {
    message = 'product deleted successfully';
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
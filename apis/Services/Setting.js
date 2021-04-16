const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const table_name="settings";

async function listRecords(page=1,limit=config.listPerPage){
  const offset = helper.getOffset(page,limit);
  const rows = await db.query(
    `SELECT id, 
    site_name,site_favicon,address,contact_nos,email_id,opening_hours,facebook,
            twitter,linked_in,pinerest,google_map,google_embedded_code,meta_title,
            meta_description,meta_keywords,analytics_code,share_this_code,
            webmaster_code,absense_code
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
        (site_name,site_favicon,address,contact_nos,email_id,opening_hours,facebook,
            twitter,linked_in,pinerest,google_map,google_embedded_code,meta_title,
            meta_description,meta_keywords,analytics_code,share_this_code,
            webmaster_code,absense_code) 
        VALUES 
        (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
        [
          record.site_name,
          record.site_favicon,
          record.address,
          record.contact_nos,
          record.email_id,
          record.opening_hours,
          record.facebook,
          record.twitter,
          record.linked_in,
          record.pinerest,
          record.google_map,
          record.google_embedded_code,
          record.meta_title,
          record.meta_description,
          record.meta_keywords,
          record.analytics_code,
          record.share_this_code,
          record.webmaster_code,
          record.absense_code,
          
        ]
      );
    
      let message = 'Error in creating Setting';
    
      if (result.affectedRows) {
        message = 'Setting created successfully';
      }
    
      return {message};
  
}

/* PUT programming language */
async function updateRecord(id, record){
  const result = await db.query(
    `UPDATE ${table_name} 
    SET 
    site_name=?,site_favicon=?,address=?,contact_nos=?,email_id=?,
    opening_hours=?,facebook=?,twitter=?,linked_in=?,pinerest=?,google_map=?,
    google_embedded_code=?,meta_title=?,meta_description=?,meta_keywords=?,
    analytics_code=?,share_this_code=?,webmaster_code=?,absense_code=?
    WHERE id=?`, 
    [
        record.site_name,
        record.site_favicon,
        record.address,
        record.contact_nos,
        record.email_id,
        record.opening_hours,
        record.facebook,
        record.twitter,
        record.linked_in,
        record.pinerest,
        record.google_map,
        record.google_embedded_code,
        record.meta_title,
        record.meta_description,
        record.meta_keywords,
        record.analytics_code,
        record.share_this_code,
        record.webmaster_code,
        record.absense_code,
      id
    ]
  );

  let message = 'Error in updating Update';

  if (result.affectedRows) {
    message = 'Setting updated successfully';
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

  let message = 'Error in deleting Update';

  if (result.affectedRows) {
    message = 'Setting deleted successfully';
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
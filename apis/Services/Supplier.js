const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const table_name="suppliers";

async function listRecords(page=1,limit=config.listPerPage){
  const offset = helper.getOffset(page,limit);
  const rows = await db.query(
    `SELECT id, 
    name,about,business_id,category_id,featured_categories,brand_id,
            user_id,yoe,noe,company_owner,contact_email,contact_phone,contact_mobile,
            website,facebook_url,twitter_url,linkedin_url,country_id,state_id,city_id,
            zipcode,full_address,logo,banner,status,meta_title,meta_description 
    FROM ${table_name} LIMIT ?,?`, 
    [offset,limit]
  );

  const totalRows=await db.query(
    `SELECT COUNT(*) as total FROM  ${table_name}`
  );
  const data = helper.emptyOrRows(rows);
  const total_pages=Math.ceil(totalRows[0].total/limit);
  const total=totalRows[0].total;
  const per_page=limit;

 
  return {
    data,
    page,
    total,
    per_page,
    total_pages
  }

}

/* POST programming language */
async function saveRecord(record){
    const result = await db.query(
        `INSERT INTO  ${table_name}
        (name,about,business_id,category_id,featured_categories,brand_id,
            user_id,yoe,noe,company_owner,contact_email,contact_phone,contact_mobile,
            website,facebook_url,twitter_url,linkedin_url,country_id,state_id,city_id,
            zipcode,full_address,logo,banner,status,meta_title,meta_description) 
        VALUES 
        (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
        [
          record.name,
          record.about,
          record.business_id,
          record.category_id,
          record.featured_categories,
          record.brand_id,
          record.user_id,
          record.yoe,
          record.noe,
          record.company_owner,
          record.contact_email,
          record.contact_phone,
          record.contact_mobile,
          record.website,
          record.facebook_url,
          record.twitter_url,
          record.linkedin_url,
          record.country_id,
          record.state_id,
          record.city_id,
          record.zipcode,
          record.full_address,
          record.logo,
          record.banner,
          record.status,
          record.meta_title,
          record.meta_description

        ]
      );
    
      let message = 'Error in creating suppliers language';
    
      if (result.affectedRows) {
        message = 'suppliers created successfully';
      }
    
      return {message};
  
}

/* PUT programming language */
async function updateRecord(id, record){
  const result = await db.query(
    `UPDATE ${table_name} 
    SET 
    name=?,about=?,business_id=?,category_id=?,featured_categories=?,brand_id=?,
    user_id=?,yoe=?,noe=?,company_owner=?,contact_email=?,contact_phone=?,
    contact_mobile=?,website=?,facebook_url=?,twitter_url=?,linkedin_url=?,
    country_id=?,state_id=?,city_id=?,zipcode=?,full_address=?,logo=?,status=?,
    banner=?,meta_title=?,meta_description=?
    WHERE id=?`, 
    [
        record.name,
        record.about,
        record.business_id,
        record.category_id,
        record.featured_categories,
        record.brand_id,
        record.user_id,
        record.yoe,
        record.noe,
        record.company_owner,
        record.contact_email,
        record.contact_phone,
        record.contact_mobile,
        record.website,
        record.facebook_url,
        record.twitter_url,
        record.linkedin_url,
        record.country_id,
        record.state_id,
        record.city_id,
        record.zipcode,
        record.full_address,
        record.logo,
        record.banner,
        record.status,
        record.meta_title,
        record.meta_description,
      id
    ]
  );

  let message = 'Error in updating suppliers';

  if (result.affectedRows) {
    message = 'suppliers updated successfully';
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

  let message = 'Error in deleting suppliers';

  if (result.affectedRows) {
    message = 'suppliers deleted successfully';
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
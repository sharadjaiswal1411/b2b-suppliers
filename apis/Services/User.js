const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const table_name="users";

/* GET programming language */

async function listRecords(page=1,limit=config.listPerPage){
  const offset = helper.getOffset(page,limit);
  const rows = await db.query(
    `SELECT id, 
    name,email,profile_pic,password,mobile_no,last_login,ip_address,
    user_type,status
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
        ( name,email,profile_pic,password,mobile_no,last_login,ip_address,
          user_type,status) 
        VALUES 
        (?,?,?,?,?,?,?,?,?)`, 
        [
          record.name,
          record.email,
          record.profile_pic,
          record.password,
          record.mobile_no,
          record.last_login,
          record.ip_address,
          record.user_type,
          record.status
        ]
      );
    
      let message = 'Error in creating user';
    
      if (result.affectedRows) {
        message = 'user created successfully';
      }
    
      return {message};
  
}

/* PUT programming language */
async function updateRecord(id, record){
  const result = await db.query(
    `UPDATE ${table_name} 
    SET 
    name=?,email=?,profile_pic=?,password=?,mobile_no=?,last_login=?,
    ip_address=?,user_type=?,status=?
    WHERE id=?`, 
    [
      record.name,
          record.email,
          record.profile_pic,
          record.password,
          record.mobile_no,
          record.last_login,
          record.ip_address,
          record.user_type,
          record.status,
      id
    ]
  );

  let message = 'Error in updating user';

  if (result.affectedRows) {
    message = 'user updated successfully';
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

  let message = 'Error in deleting user';

  if (result.affectedRows) {
    message = 'user deleted successfully';
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
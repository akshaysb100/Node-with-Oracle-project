const oracledb = require('oracledb');

async function deleteEmployeeRecord() {
  try {
    connection = await oracledb.getConnection({
        user: "akshay",
        password: "password123",
        connectString: "localhost:1521/ORCL"
    });
    console.log('connected to database');
    
  connection.execute('DELETE FROM employees WHERE ID =:employeeId', { employeeId: 5}, 
  {autoCommit: true});
     
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

deleteEmployeeRecord();
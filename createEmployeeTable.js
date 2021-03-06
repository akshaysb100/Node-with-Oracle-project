const oracledb = require('oracledb');

async function createEmployeeTable() {
  try {
    connection = await oracledb.getConnection({
        user: "akshay",
        password: "password123",
        connectString: "localhost:1521/ORCL"
    });
    console.log('connected to database');

    await connection.execute(`CREATE TABLE employees(ID VARCHAR2(20), NAME VARCHAR2(20), ROLE VARCHAR2(20), SALARY VARCHAR2(20), ADDRESS VARCHAR2(20))`); 

  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

createEmployeeTable();
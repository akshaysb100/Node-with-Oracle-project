const oracledb = require('oracledb');

async function updateEmployeeData() {
  try {
    connection = await oracledb.getConnection({
        user: "akshay",
        password: "password123",
        connectString: "localhost:1521/ORCL"
    });
    console.log('connected to database');

    // await connection.execute('UPDATE employees SET NAME = :7 where ID = :7', ['Mangesh', 7]);

    connection.execute(
            "UPDATE employees set NAME=:employeeName  WHERE ID=:employeeId ",
            {employeeName: 'Mangesh', employeeId: 7},
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

updateEmployeeData();
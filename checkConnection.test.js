const connection = require('./checkConnection');
const oracledb = require('oracledb');

jest.mock('oracledb');

test('check connection is proper or not', () => {

    oracledb.getConnection.mockImplementation(() => Promise.resolve("resp"));
});
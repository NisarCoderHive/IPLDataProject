// const csv = require('csvtojson')
// const csvFilePath = 'data.csv'
// const array = await csv().fromFile(csvFilePath);

const csv = require('async-csv');
const fs = require('fs').promises;
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'exercises',
  password: 'postgres',
  port: 5432
});
(async() => {
  // Read file from disk:
  const csvString = await fs.readFile('./Data/matches.csv', 'utf-8');
 
  // Convert CSV string into rows:
  const rows = await csv.parse(csvString);
  //console.log(rows)
 await rows.map(row => {
    pool.query('insert into matches(id,season) values (' +row[0] +',\'' + row[1] +'\')', (err, res) => {
        console.log('Success',err, res,row[0],row[1])
       
      })
  })
  pool.end();
})();



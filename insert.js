const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'exercises',
  password: 'postgres',
  port: 5432
})
pool.query('insert into emp values (999,\'john \',4000)', (err, res) => {
  console.log('Success',err, res)
  pool.end()
})

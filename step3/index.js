const mysql = require('mysql')
const env = require('./env')

// 値は環境変数（process.env）から取るのが一般的だよ
const mysqlConnection = mysql.createConnection({
  host: env.dbHost,
  user: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
})

mysqlConnection.connect((err) => {
  if(err) {
    console.error(err)
    throw err
  } else {
    console.log('MYSQLに接続したよ。')
  }
})

const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('WEBサーバーが起動したよ。PORT:3000 でリクエストを待ってます...')
})

app.get('/', (req, res, next) => {
  res.json('OK')
})

app.get('/users', (req, res, next) => {
  // この辺はもうちょい便利なライブラリを使う事がほとんどなので、
  //「へー」くらいの理解で良いです
  const sql = 'SELECT * FROM users'
  mysqlConnection.query(sql, (err, result, fields) => {
    if (err) throw {
      err
    }
    res.send(result)
  })
})

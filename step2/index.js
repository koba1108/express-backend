const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('WEBサーバーが起動したよ。PORT:3000 でリクエストを待ってます...')
})

app.get('/', (req, res, next) => {
  res.json('OK')
})

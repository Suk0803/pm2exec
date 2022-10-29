const fs = require('fs')

const html = fs.readFileSync('index.html', 'utf-8')
console.log(html)

const express = require('express')
const app = express()
const port = 3000


app.get('/', function (req, res) { 
  res.send(html)
})

app.listen(port, function () {
  console.log(`running`)
})
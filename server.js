const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('This is a test')
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

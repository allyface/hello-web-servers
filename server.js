const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/albums', (req, res) => {
  res.render('albums')
})

app.get('/songs', (req, res) => {
  res.render('songs')
})

app.get('/artists/:artist_id', (req, res) => {
  res.render('artist')
})

app.get('/albums/:album_id', (req, res) => {
  res.render('album')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

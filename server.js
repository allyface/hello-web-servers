const express = require('express')
const app = express()
const path = require('path')
const albums = require('./database/albums.json')
const artists = require('./database/artists.json')
const songs = require('./database/songs.json')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', {
    artists: artists
  })
})

app.get('/albums', (req, res) => {
  res.render('albums', {
    albums: albums,
    artists: artists
  })
})

app.get('/songs', (req, res) => {
  res.render('songs', {
    albums: albums,
    artists: artists,
    songs: songs
  })
})

app.get('/artists/:artist_id', (req, res) => {
  const artist = artists.filter((artist) => {
    return artist.id == req.params.artist_id
  })[0]
// console.log(req)
  console.log('artist', artist);
  console.log('url', req.url);
  res.render('artist', {
    albums: albums,
    songs: songs,
    id: artist.id,
    name: artist.name,
    genre: artist.genre
  })
})

app.get('/albums/:album_id', (req, res) => {
  const album = albums.filter((album) => {
    return album.id == req.params.album_id
  })[0]

  res.render('album', {
    songs: songs,
    artists: artists,
    id: album.id,
    artist: album.artist_id,
    title: album.title,
    year: album.year
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 4000

const PRESENTERS_FILE = './data/game-presenters.json'

app.use(express.static(path.join(__dirname, './dist')))

app.get('/game-presenters-data', (req, res) => {
  fs.readFile(PRESENTERS_FILE, (err, data) => {
    if (err) {
      // TODO: proper error handling such as:
      //  - logging on backend
      //  - notify the user on the client
      console.log(`Error, failed to open ${PRESENTERS_FILE}: ${err}`)
    }

    res.send(data)
  })
})

app.post('/game-presenters-data', (req, res) => {

})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

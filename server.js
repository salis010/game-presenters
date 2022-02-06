const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

const PRESENTERS_FILE = './data/game-presenters.json'

app.use(express.static(path.join(__dirname, './dist')))

app.use(bodyParser.json())

app.get('/game-presenters-data', (req, res) => {
  fs.readFile(PRESENTERS_FILE, (err, data) => {
    if (err) {
      const errorMessage = `Error, failed to open ${PRESENTERS_FILE}: ${err}`
      console.log(errorMessage)

      res.status(400)
      res.send(errorMessage)
    }

    res.send(data)
  })
})

app.post('/game-presenters-data', (req, res) => {
  fs.readFile(PRESENTERS_FILE, (err, data) => {
    if (err) {
      const errorMessage = `Error, failed to open ${PRESENTERS_FILE}: ${err}`
      console.log(errorMessage)

      res.status(400)
      res.send(errorMessage)
    }

    const fileData = JSON.parse(data)
    const newId = fileData.presenters.length === 0 ? 0 : fileData.presenters[fileData.presenters.length - 1].id + 1
    const newPresenter = { id: newId, ...req.body }
    fileData.presenters.push(newPresenter)

    fs.writeFile(PRESENTERS_FILE, JSON.stringify(fileData), (err) => {
      if (err) {
        const errorMessage = `There was an error with wirting ${req.body} to ${PRESENTERS_FILE}: ${err}`
        console.log(errorMessage)

        res.status(400)
        res.send(errorMessage)
      } else {
        res.status(200)
        res.send(JSON.stringify(fileData))
      }
    })
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

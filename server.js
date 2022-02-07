const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const readFile = require('./server-utils/readFile')
const writeFile = require('./server-utils/writeFile')

const app = express()
const port = 4000

const PRESENTERS_FILE = './data/presenters.json'
const TABLES_FILE = './data/tables.json'

app.use(express.static(path.join(__dirname, './dist')))

app.use(bodyParser.json())

// presenters
app.get('/presenters-data', (req, res) => {
  readFile(PRESENTERS_FILE, res)
    .then(data => {
      res.send(data)
    })
})

app.post('/presenters-data', (req, res) => {
  readFile(PRESENTERS_FILE, res)
    .then(data => {
      const fileData = JSON.parse(data)
      const newId = fileData.presenters.length === 0 ? 0 : fileData.presenters[fileData.presenters.length - 1].id + 1
      const newPresenter = { id: newId, ...req.body }

      fileData.presenters.push(newPresenter)

      const errorMessage = `There was an error with wirting ${req.body} to ${PRESENTERS_FILE}: `
      writeFile(PRESENTERS_FILE, fileData, errorMessage, res)
    })
})

app.put('/presenters-data', (req, res) => {
  readFile(PRESENTERS_FILE, res)
    .then(data => {
      const fileData = JSON.parse(data)
      const { id, name, surname } = req.body
      const index = fileData.presenters.findIndex(presenter => presenter.id === id)

      fileData.presenters[index].name = name
      fileData.presenters[index].surname = surname

      const errorMessage = `There was an error with updating ${req.body} to ${PRESENTERS_FILE}: `
      writeFile(PRESENTERS_FILE, fileData, errorMessage, res)
    })
})

app.delete('/presenters-data', async (req, res) => {
  readFile(PRESENTERS_FILE, res)
    .then(data => {
      const fileData = JSON.parse(data)
      const { id } = req.body
      const index = fileData.presenters.findIndex(presenter => presenter.id === id)

      fileData.presenters.splice(index, 1)

      const errorMessage = `There was an error with deleting ${req.body} from ${PRESENTERS_FILE}: `
      writeFile(PRESENTERS_FILE, fileData, errorMessage, res)
    })
})

// tables
app.get('/tables-data', (req, res) => {
  readFile(TABLES_FILE, res)
    .then(data => {
      res.send(data)
    })
})

app.post('/tables-data', (req, res) => {
  readFile(TABLES_FILE, res)
    .then(data => {
      const fileData = JSON.parse(data)
      const newId = fileData.tables.length === 0 ? 0 : fileData.tables[fileData.tables.length - 1].id + 1
      const newTable = { id: newId, ...req.body }

      fileData.tables.push(newTable)

      const errorMessage = `There was an error with wirting ${req.body} to ${TABLES_FILE}: `
      writeFile(TABLES_FILE, fileData, errorMessage, res)
    })
})

app.put('/tables-data', (req, res) => {
  readFile(TABLES_FILE, res)
    .then(data => {
      const fileData = JSON.parse(data)
      const { id, name, surname } = req.body
      const index = fileData.tables.findIndex(table => table.id === id)

      fileData.tables[index].name = name
      fileData.tables[index].surname = surname

      const errorMessage = `There was an error with updating ${req.body} to ${TABLES_FILE}: `
      writeFile(TABLES_FILE, fileData, errorMessage, res)
    })
})

app.delete('/tables-data', async (req, res) => {
  readFile(TABLES_FILE, res)
    .then(data => {
      const fileData = JSON.parse(data)
      const { id } = req.body
      const index = fileData.tables.findIndex(table => table.id === id)

      fileData.tables.splice(index, 1)

      const errorMessage = `There was an error with deleting ${req.body} from ${TABLES_FILE}: `
      writeFile(TABLES_FILE, fileData, errorMessage, res)
    })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

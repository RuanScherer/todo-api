const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/ProjectController')(app)
require('./controllers/TaskController')(app)

app.listen(3030)
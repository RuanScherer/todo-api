const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/ProjectController')(app)
require('./controllers/TaskController')(app)

app.listen(process.env.PORT || 3000)
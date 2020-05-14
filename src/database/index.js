const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

mongoose.connect("mongodb+srv://usuario_admin:xOdtYYXTOqTKeLhi@mycluster-lcfko.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Promise = global.Promise

module.exports = mongoose
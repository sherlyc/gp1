var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var routes = require('./routes')
var bodyParser = require('body-parser')

var app = express()

//view engine config
var hbsConfig = {
  defultLayout: 'main',
  extname: 'hbs'
}
app.engine('hbs',hbs(hbsConfig))
app.set('view engine','hbs')

// Middleware
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }))

//Super Important to mount rounter to app!
app.use('/',routes)

module.exports = app

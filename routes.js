var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var fs = require('fs')

var router = express.Router()
var app = express()

router.get('/',(req,res)=>{
  res.render('index')
})

module.exports=router

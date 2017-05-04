const express = require('express')
const router = express.Router()
var funcs = require('./functions')
var data = require('./data.json')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/other', (req, res) => {
  res.render('other')
})

router.post('/', (req, res) => {
  // console.log(req.body.newTask)
  console.log(req.body);
  funcs.addTask(req.body)
  console.log(data)

})


module.exports = router

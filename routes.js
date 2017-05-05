const express = require('express')
const router = express.Router()
var funcs = require('./functions')
var data = require('./data.json')

router.get('/', (req, res) => {
  res.render('home', {data})
})

router.get('/other', (req, res) => {
  res.render('other')
})

router.post('/', (req, res) => {
  var newId = data.length + 1
  var newObj = {
    "id": newId,
    "task": req.body.newTask,
    "priority": "Medium",
    "status": "New"
  }
  console.log(newObj);
  funcs.addTask(newObj)
  console.log(data)
  res.redirect('/')
})


module.exports = router

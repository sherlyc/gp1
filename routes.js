const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/other', (req, res) => {
  res.render('other')
})
module.exports = router

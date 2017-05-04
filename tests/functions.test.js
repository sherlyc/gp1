var test = require('tape')
var funcs = require('../functions')

test('test that tests work', (t) => {
  t.pass()
  t.end()
})

test('Add object to data correctly', (t) => {
  var newTask = {"id":4, "task": "Wash clothes", "priority":"Low", "status": "New" }
  var actual = funcs.addTask(newTask)
  
  t.equal(actual.length, 5, 'data length is correct')
  t.end()
})

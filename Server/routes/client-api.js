var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ api: 'Hello World!' });
});

router.get('/customers', function(req, res) {
  const customers = {
      "id1": {
        "firstName": "Betty",
        "lastName": "Smith",
        "age": 27
      },
      "id2": {
        "firstName": "John",
        "lastName": "Doe",
        "age": 43
      },
      "id3": {
        "firstName": "Bob",
        "lastName": "Robertson",
        "age": 78
      }
  }
  console.log(customers)
  res.send(customers);
});

module.exports = router;

var express = require('express');
var router = express.Router();

const { v4: uuid } = require('uuid');
var moment = require('moment');

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
  res.send(customers);
});

router.get('/account/notifications', function(req, res) {
  const customers = {
    notifications: [
      {
        id: uuid(),
        title: 'New order has been received',
        type: 'order',
        created_at: moment().subtract(2, 'hours')
      },
      {
        id: uuid(),
        title: 'New customer is registered',
        type: 'user',
        created_at: moment().subtract(1, 'day')
      },
      {
        id: uuid(),
        title: 'Project has been approved',
        type: 'project',
        created_at: moment().subtract(3, 'days')
      },
      {
        id: uuid(),
        title: 'New feature has been added',
        type: 'feature',
        created_at: moment().subtract(7, 'days')
      }
    ]
  };
  res.json(customers);
});

module.exports = router;

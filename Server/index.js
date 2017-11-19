

var fs = require('fs');
var products = JSON.parse(fs.readFileSync('./data/jsonData.json', 'utf8'));
const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let items = [];


/////  users
 const users = new Map();
 users.set('dudi1422@gmail.com', {password: '123456', name: 'David'});
 users.set('demo@gmail.com', {password: '123456', name: 'Demo'});
 users.set('test@gmail.com', {password: 'test', name: 'Test'});
 users.set('dudih@codevalue.net', {password: '123456', name: 'CodeValue'});
////

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('/login', function (req, res) {
  setTimeout(function () {
    if (users.get(req.query.email) && req.query.pwd === users.get(req.query.email).password) {
      res.json({ isValid: true, userName: users.get(req.query.email).name })
    }
    else {
      res.json({ isValid: false })
    }
  }, 500);
})

app.get('/orderHistory', function (req, res) {
  setTimeout(function () {
    res.json(items);
  }, 500);
})


app.get('/items', function (req, res) {
  setTimeout(function () {
    res.json(products);
  }, 1500);
})


app.post('/savecart', function (req, res) {
  items = req.body;  
  setTimeout(function () {
     res.json({ ok: true });
  }, 3000); 
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
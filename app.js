var express = require('express');
// var bodyParser = require('body-parser');

var app = express();

// var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

app.use('/images', express.static('images'));
app.use('/styles', express.static('styles'));
app.use('/scripts', express.static('scripts'));

app.get('/', (req, res)=>{
  res.render('index');
});
// app.get('/contact', (req, res)=>{
//   res.render('contact', {qs: req.query});
// });
//
// app.post('/contact', urlencodedParser, (req, res)=>{
//   console.log(req.body);
//   res.render('contact-success', {data: req.body});
// });
//
//
// app.get('/profile/:id', (req, res)=>{
//   var data = {age: 29, job: 'ninja', hobbies: ['eating', 'running', 'listening Songs']};
//   res.render('profile', {person: req.params.id, data});
// });

app.listen(3000);

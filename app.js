var express = require('express');
var projectList = require('./data.js').projectList;
var mail = require('./mail');
var bodyParser = require('body-parser');
var app = express();
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
// var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies

app.set('view engine', 'ejs');

app.use('/images', express.static('images'));
app.use('/styles', express.static('styles'));
app.use('/scripts', express.static('scripts'));
app.use('/fonts', express.static('fonts'));

app.get('/', (req, res)=>{
  res.render('index',{projectList});
});
app.post('/sendmail', (req, res)=>{
  console.log(req.body);
  mail.sendmail(req.body);
  // sendMail();
  // res.render('index');
});
//
//
// app.get('/profile/:id', (req, res)=>{
//   var data = {age: 29, job: 'ninja', hobbies: ['eating', 'running', 'listening Songs']};
//   res.render('profile', {person: req.params.id, data});
// });

// app.listen(3000);

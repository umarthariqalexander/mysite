var express = require('express');
var path = require('path');
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

app.use('/images', express.static(path.join(__dirname,'/dist/images/')));
app.use('/styles/fonts', express.static(path.join(__dirname,'/dist/fonts/')));
app.use('/styles', express.static('styles'));
app.use('/scripts', express.static('scripts'));

app.get('/', (req, res)=>{
  res.render('index',{projectList});
});
app.post('/sendmail', (req, res)=>{
  console.log(req.body);
  var response = mail.sendmail(req.body);
  if(response){
      res.end('Your message sent to Umar. Thank You for your interest!!!');
  }
  else{
    res.end(response.err);
  }

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

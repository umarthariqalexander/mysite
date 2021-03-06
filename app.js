var express = require('express');
var path = require('path');
var mail = require('./mail');
var bodyParser = require('body-parser');
var app = express();
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
// var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies
app.use('/', express.static('dist'));
app.use('/api/', express.static(path.join(__dirname,'/app.js')));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

app.post('/api/sendmail', (req, res)=>{
  console.log(req.body.queryObj);
  var response = mail.sendmail(req.body.queryObj);
  if(response){
      res.end('Your message sent to Umar. Thank You for your interest!!!');
  }
  else{
    res.end(response.err);
  }
});

var express = require('express');
var path = require('path');
var fs = require('fs');
var spdy = require('spdy');
var projectList = require('./data.js').projectList;
var mail = require('./mail');
var bodyParser = require('body-parser');
var app = express();
var httpsRedirect = require('express-https-redirect');

// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
// var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies
app.use('/', httpsRedirect(true));

app.set('view engine', 'ejs');


app.use('/images', express.static(path.join(__dirname,'/dist/images/')));
app.use('/styles/fonts', express.static(path.join(__dirname,'/dist/fonts/')));
app.use('/styles/icomoonfonts', express.static(path.join(__dirname,'/styles/fonts/')));
app.use('/styles', express.static(path.join(__dirname,'/dist/styles/')));
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
});

const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
};

spdy
  .createServer(options, app)
  .listen(process.env.PORT || 3000, (err)=>{
    if(err){
      throw new Error(err);
    }
    console.log("Express server listening");
  });

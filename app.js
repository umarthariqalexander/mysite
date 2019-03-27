let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
// var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies
app.use('/', express.static('dist'));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

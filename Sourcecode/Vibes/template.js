const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/views/log.html" );
})

app.get('/create', function (req, res) {
   res.sendFile( __dirname + "/views/create.html" );
})

app.get('/home', function (req, res) {
   res.sendFile( __dirname + "/views/home.html" );
})

app.get('/company', function (req, res) {
   res.sendFile( __dirname + "/views/company.html" );
})

app.get('/create_event', function (req, res) {
   res.sendFile( __dirname + "/views/create_event.html" );
})

app.get('/create_company', function (req, res) {
   res.sendFile( __dirname + "/views/create_company.html" );
})

app.get('/archives', function (req, res) {
   res.sendFile( __dirname + "/views/archives.html" );
})

app.get('/delete', function (req, res) {
   res.sendFile( __dirname + "/views/delete.html" );
})

app.get('/profile_company', function (req, res) {
   res.sendFile( __dirname + "/views/profile_company.html" );
})

app.get('/profile_organizer', function (req, res) {
   res.sendFile( __dirname + "/views/profile_organizer.html" );
})

app.get('/logout', function (req, res) {
   res.sendFile( __dirname + "/views/logout.html" );
})


app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.username,
      pass_word:req.query.password
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
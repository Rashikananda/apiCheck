let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3000;
    // app.get('/', function (req, res) {
    //   res.render('index');
    // })
    var fs = require("fs");


 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.post('/getlogintoken.json', function(req,res) {
// sendMessage(req,res);
      const username = req.body.username, password = req.body.password;
      if ( username === 'itpl' && password === 'itpl') {
         console.log('getlogintoken');
         res.send({ token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpdHBsIiwiYXVkaWVuY', 
            admin: 'demoisu' } );
      } else {
         res.send('Un authorized');
      }
      
});
app.post('/dmt/getcustomer/:number', function(req,res) {
   // sendMessage(req,res);
   console.log('The id you specified is ' + req.params.number);
   const headers = req.headers;
   const tokenObj = { token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpdHBsIiwiYXVkaWVuY', 
      admin: 'demoisu' }
      if ( headers.token === tokenObj.token && headers.admin ===tokenObj.admin ) {
               // Asynchronous read
fs.readFile('customers.json', function (err, data) {
   if (err) {
      return console.error(err);
   }
   setTimeout(() => {
      console.log('teswtwww')
   res.send(data);
      
   }, 5000);
   // console.log("Asynchronous read: " + data.toString());
});
      } else {
         res.sendStatus('Unautorized');
      }
         console.log('assync')
         // const username = req.body.username, password = req.body.password;
         // if ( username === 'itpl' && password === 'itpl') {
         //    res.send({ token: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpdHBsIiwiYXVkaWVuY, 
         //       admin: demoisu } );
         // } else {
         //    res.send('Un authorized');
         // }
         
            
   });
// app.post('/send-email', function(req,res) {
//    // sendMessage(req,res);
//    saveCamaign(req,res);
//    });
app.listen(port, function () {
  console.log('Server is running at port: ', port);
});

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
const cors = require("cors");
//Main Controller Imports
const bookController = require("./controllers/books");
const testController = require("./controllers/temp");
const userController = require("./controllers/user");
const eventController = require("./controllers/event");
const companyController = require("./controllers/company");
const authenticate = require("./middleware/authenticate");

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

mongoose
  .connect("mongodb://localhost:27017/express-mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    
    app.use(express.static(__dirname + '/public'));
    app.use(express.json());
    
    //Log In page
    /*app.get('/', function (req, res) {
        res.sendFile( __dirname + "/views/log.html" );
     })
    
     //Create account page
    app.get('/user', function (req, res) {
        res.sendFile( __dirname + "/views/create.html" );
     })*/
    
     //app.get("/books/:id", bookController.findBook);
    // Testing things
    //app.post("/books/:id", testController.updateBook);

    //Add user to the database
    app.post("/user", userController.createUser);

    //Validate user and let him log in
    app.post("/validation", userController.validateUser);

    //Add event to the database
    app.post("/create_event", authenticate ,eventController.createEvent);

    //Get event to the database
    app.get("/get_event", eventController.findEvents);

    //Get event from specific user
    app.get("/get_event_user", authenticate ,eventController.findUserEvents);

    //Add company to the database
    app.post("/create_company", companyController.createCompany);

    //Get companies to the database
    app.get("/get_company", companyController.findCompanies);

    //Logout
    app.get("/logout", (req,res) =>{
      res.clearCookie('jwtoken', { path: '/' });
      res.status(200).send("user Logout");
    });



    //Home page
    /*
    app.get('/home', function (req, res) {
        res.sendFile( __dirname + "/views/home.html" );
     })

     //Display all the events on the home page
     app.get('/home', function (req, res) {
      res.sendFile( __dirname + "/views/home.html" );
   })
    
    //Create event page
    app.get('/create_event', function (req, res) {
        res.sendFile( __dirname + "/views/create_event.html" );
     })
    

    //Create commpany page
    app.get('/create_company', function (req, res) {
        res.sendFile( __dirname + "/views/create_company.html" );
     })
    

    /*
    app.get("/books", bookController.findBooks);
    app.post("/books", bookController.createBook);
    app.get("/books/:id", bookController.findBook);
    app.patch("/books/:id", bookController.updateBook);
    app.delete("/books/:id", bookController.deleteBook);
    */
    
    app.listen(5000, () => {
      console.log("Server has started at port 5000");
    });
  })
  .catch(() => {
    console.log("Database connection failed!");
  });
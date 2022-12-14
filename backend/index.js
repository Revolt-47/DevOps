const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/myhotel');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
});
// define Schema
var CustSchema = mongoose.Schema({
    name: String,
    email :  {
        type : String ,
        unique : true
    } ,
    phone : String,
    password : String,
  });

  // compile schema to model
  var customer = mongoose.model('customers', CustSchema);

  var RoomSchema = mongoose.Schema({
    room_no : Number,
    type : String,
    seats : Number,
    description : String,
    price  : Number,
    booked : Boolean,
  })

  var rooms = mongoose.model('rooms',RoomSchema);

  var bookSchema = mongoose.Schema({
    room_no : Number,
    email : String,
    checkin : String,
    checkout : String,
    price : Number,
  })

  var bookings = mongoose.model('bookings',bookSchema)

  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get("/customers",(req,res , next)=>{
    res.json({"users":["userone","usertwo","userthree"]})
})



app.post("/customers" , (req , res ,next)=>{
    console.log(req.body)
    const query = customer.findOne({'email' : req.body.email , 'password' : req.body.password})
   // query.select('email name');
    query.exec(function (err,customer){
        if(err) return console.error(err);
        console.log(customer);
        res.send(customer)
        return;
    })
    // res.send({msg: 'Customer not Found'})
})

let state ;

app.get("/createcustomer",(req,res , next)=>{
    res.send(state);
})
 

app.post("/createcustomer",(req,res,next)=>{

    //const article = new cust(req.body)
    console.log(req.body);
   /* const query = customer.findOne({'email' : req.body.email})
    query.select('email');
    query.exec(function (err,customer){
        if(err) return console.error(err);
        console.log(customer.email);
    });*/

    var cus = new customer(req.body);
    cus.save(function (err, customer) {
        if (err){ 
            state = true;
            return console.error(err);}
            state=false;
        console.log(customer.name + " added to customers.");
      });

})

app.get("/rooms",(req,res , next)=>{
  //  res.json({"users":["userone","usertwo","userthree"]})
    const query = rooms.find({'booked' : false});
    query.exec(function (err,rooms){
        if(err) return console.error(err);
        console.log(rooms)
        res.json(rooms);
    })

})


app.post("/newbooking",(req,res,next)=>{
    var book = new bookings(req.body);
    book.save(function (err, booking) {
        if (err){ 
            return console.error(err);}
        console.log(booking._id + " added to bookings.");
      });

})

app.post("/booking",(req,res,next)=>{
    const query = bookings.find({'email' : req.body.email});
    query.exec(function(err,books){
        if(err) return console.error(err);
        console.log(books);
        res.json(books);
    })
    
})


app.listen(3001,()=>{
    console.log("server started on port 3001")
})

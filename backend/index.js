/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cust from './Model/Customer.js';
import rooms from './Model/Rooms.js';
import booking from './Model/Booking.js';

// Importing user route
import router from './routes/users.js';
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = 3001
mongoose.connect('mongodb://localhost:27017/myhotel')

app.use(bodyParser.json())
// Adding a Router
app.use('/users', router);

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const article = new cust({
    Customer_id : "1",
    Name : "Umer Iftikhar",
    Phone : "032222222",
    email : "theta@parhai.com",
 
});
 

const firstarticle = await cust.findOne ({});
console.log(firstarticle);
import mongoose from "mongoose";

const  { Schema, model } = mongoose;

const BookSchema = new Schema({
    Booking_id : String,
    Room_id : String,
    Customer_id : String,
    Date_to: Date,
    Date_From : Date,
    Bil : Number,
}); 

const booking = model("Bookings",BookSchema);

export default booking;
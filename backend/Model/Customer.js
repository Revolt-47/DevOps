import mongoose from "mongoose";
const  { Schema, model } = mongoose;

const CustSchema = new Schema({
    Customer_id : String,
    Name : String,
    Phone : String,
    email : String,
}); 

const cust = model("Customer",CustSchema);

export default cust;


import mongoose from "mongoose";
const  { Schema, model } = mongoose;

const RoomSchema = new Schema({
    Room_id : String,
    Room_number : String,
    Seats : String,
    Description : String,
    Room_Type : String,
    Price : Number,
}); 

const rooms = model("Rooms",RoomSchema);

export default rooms;
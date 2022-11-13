import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form({room,user}){

  const room_no = room;
  const active = user.email; 
  

  const navigate = useNavigate();

  const setdate1 = (e) =>{
    setcheckin(e.target.value);
}

const setdate2 = (e) =>{
    setcheckout(e.target.value);
}

async function postData(url = '', data) {
  

  // Default options are marked with *
axios({
method: 'post',

url: 'http://localhost:3001/newbooking',
data: {
   room_no : room_no,
   email : active,
   checkin : checkin,
   checkout : checkout,
}
});




}
function submit () {
  if(room_no && active && checkin && checkout){
  postData();
  navigate('/dashboard')}
}
    

    return(
    <div>
            <div className="heading">
            <h1>My Hotel</h1>
            <span>Highland Street , Islamabad</span><br></br>
            <span>Phone : 051-12345</span>
            </div>

            <div>
                <label>Room number</label>
                <input type='text' placeholder={room_no} readOnly ></input> <br></br>
                <label>Email</label>
                <input type='text' placeholder={active} readOnly ></input> <br></br>
                <div class="elem-group inlined">
    <label for="checkin-date">Check-in Date</label>
    <input type="date" id="checkin-date" name="checkin" required onChange={setdate1}></input>
  </div>
  <div class="elem-group inlined">
    <label for="checkout-date">Check-out Date</label>
    <input type="date" id="checkout-date" name="checkout" required onChange={setdate2}></input>
  </div>
  <div class="elem-group inlined">
             
            </div>

            <div>
                <button onClick={submit}>Book</button>
            </div>

        </div>
        </div>)

}
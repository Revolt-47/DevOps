import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard(props){

    const navigate = useNavigate();

    function viewrooms(){
        navigate('/rooms ');
    }

    function viewbookings(){
        navigate('/booked');
    }

    return(
        <div className="dash">
            <div className="heading">
            <h1>My Hotel</h1>
            <span>Highland Street , Islamabad</span><br></br>
            <span>Phone : 051-12345</span>
            </div>
            <div className="options">
            <ul>
                <button onClick={viewrooms}>View Rooms</button><br></br>
                <button onClick={viewbookings}>View Bookings</button>
            </ul>
            </div>
        </div>
    )
}
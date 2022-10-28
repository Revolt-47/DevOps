import axios from 'axios';
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Room({setroom}){
    
    const [rooms,setrooms] = useState([{}]);

    async function postData(url = '', data) {

        axios.get('http://localhost:3001/rooms').then((response) => {
          setrooms(response.data);
        });
    }

    const navigate = useNavigate();


    // const onchange=(e)=>{
    //     setrooms((...rooms)=>{e.target.name:e.target.value})
    // }
    function nav(r){
     //   setroom(r);
        navigate('/book')
        
    }


    

    const listItems = rooms.map(
        (element) => {
            return (
                <ul type="disc" >
                    <button onClick={()=>nav(element.room_no)}     style={{ 
                        fontWeight: 'bold', 
                        color: 'blue',
                        textalign : 'centre' }}
                    >
                      Room number : {element.room_no} <br></br>
                      Room type : {element.type} <br></br>
                      Number of seats :  {element.seats} <br></br>
                      Description :{element.description} <br></br>
                      Price :  {element.price}
                    </button>
                </ul>
            )
        }
    )



   
    return(
        <div>
             <div className="heading">
            <h1>My Hotel</h1>
            <span>Highland Street , Islamabad</span><br></br>
            <span>Phone : 051-12345</span>
            </div>
            <div>
                {listItems}
            </div>
        <button onClick={postData}> Refresh</button>
        </div>
    )
}
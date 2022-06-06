import React from 'react';
import {Link} from "react-router-dom";
import Room1 from "../images/room-1.jpeg";
import Room2 from "../images/room-5.jpeg";
import Room3 from "../images/room-8.jpeg";
import Room4 from "../images/room-2.jpeg";
import Room5 from "../images/room-4.jpeg";
import Room6 from "../images/room-7.jpeg";
import "./room.css";

const Rooms = () => {
    return (
<div className='jo'>

            <div className="date">
                <>check-in date:</>
                <input type="date" id="start" name="trip-start"/>

                <>check-out date:</>
                <input type="date" id="start" name="trip-start"/>

                <a>Number of Adult(s):</a>
                <input type="number" name="age" ></input>
                <br/>


            </div>
<div className='filter'>
    <h3>Filter</h3>
        <div className="dropdown">
            <ul>
                <li>Price Range</li>
                    <ul>
                        <li>$200-$350</li>
                        <li>$350-$500</li>
                    </ul>
                <li>Floor</li>
                    <ul>
                        <li>1st floor</li>
                        <li>2nd floor</li>
                    </ul>
                <li>Pets</li>
                    <ul>
                        <li>Allowed</li>
                        <li>Not Allowed</li>
                    </ul>
            </ul>
        </div>
</div>

<div>
            <div className="cards">
                 <div className="card1">
                    <img src={Room1} alt="double" style={{"width": "100%"}}/>
                     <br/>
                        <h1>Double Deluxe</h1>
                     <br/>
                        <p className="price">$500</p>
                     <br/>
                        <p><button>Book Now</button></p>
                </div>

            <div className="card2">
                <img src={Room2} alt="twin" style={{"width": "100%"}}/>
                <br/>
                <h1>Twin Room</h1>
                <br/>
                <p className="price">$400</p>
                <br/>
                <p><button>Book Now</button></p>
            </div>

            <div className="card3">
                <img src={Room3} alt="standard" style={{"width": "100%"}}/>
                <br/>
                <h1>Standard Room</h1>
                <br/>
                <p className="price">$350</p>
                <br/>
                <p><button>Book Now</button></p>
            </div>

            <div className="card4">
                <img src={Room4} alt="single" style={{"width": "100%"}}/>
                <br/>
                <h1>Single Room</h1>
                <br/>
                <p className="price">$200</p>
                <br/>
                <p><button>Book Now</button></p>
            </div>

                <div className="card5">

                    <img src={Room5} alt="triple" style={{"width": "100%"}}/>
                    <br/>
                    <h1>Triple Room</h1>
                    <br/>
                    <p className="price">$450</p>
                    <br/>
                    <p><button>Book Now</button></p>
                </div>



                <div className="card6">
                    <img src={Room6} alt="queen" style={{"width": "100%"}}/>
                    <br/>
                    <h1>Queen Room</h1>
                    <br/>
                    <p className="price">$300</p>
                    <br/>
                    <p><button>Book Now</button></p>
                </div>

            </div>
        </div>
        </div>
    )
};

export default Rooms;

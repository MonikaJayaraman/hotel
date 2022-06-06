import React from 'react';
import {Link} from "react-router-dom";
import "./home.css";


function Home () {
    return (

          <div className="content">

              <h1>Welcome to FrizBee</h1>
              <h2>Experience the Difference</h2>
              
              <Link to="/rooms"><button className="button">Get started</button></Link>

          </div>
    );
};

export default Home;

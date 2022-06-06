import React from 'react';
import './register.css';
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <div className="app">
        <div class="main">

            <div class="register">
                <h2>Register Here</h2>
                <form id="register" method="post">
                    <label>First Name:</label>
                    <br/>
                    <input type="text" name="name"  placeholder="Enter your First Name"></input>
                    <br/>
                    <label>Last Name:</label>
                    <br/>
                    <input type="text" name="name"  placeholder="Enter your Last Name"></input>
                    <br/>
                    <label>Your Age:</label>
                    <br/>
                    <input type="number" name="age" placeholder="How old are you?"></input>
                    <br/>
                    <label>Email:</label>
                    <br/>
                    <input type="email" name="email" placeholder="Enter your valid Email"></input>
                    <br/>
                    <label>Gender:</label>
                    <br/>
                    &nbsp;&nbsp;&nbsp;
                    <input type="radio" name="gender" ></input>
                    &nbsp;
                    <span>Male</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="gender" ></input>
                    &nbsp;
                    <span id="female">Female</span>
                    <br/>
                    <label>Known Language:</label>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" name="lang" ></input>
                    &nbsp;
                    <span id="tamil">Tamil</span>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" name="lang" ></input>
                    &nbsp;
                    <span id="eng">English</span>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" name="lang"></input>
                    &nbsp;
                    <span id="hindi">Hindi</span>
                    <br/>
                    <Link to="/sign-in">
                    <input type="submit" value="submit" name="submit" id="submit"></input>
                    </Link>

                </form>


            </div>

        </div>
        </div>


    );
};

export default Register;
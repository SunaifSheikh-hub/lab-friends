import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
// import Nav from "../Component/Navbar";
import Navbar from "../Pages/Navbar";


export default function RoutesNav() {

    return (
        <Router>
             {/* <Nav/>  */}
            <Routes>
                <Route path="/" element={<SignUp />}></Route>
                <Route path="/Navbar" element={<Navbar/>}></Route>
                <Route path="/SignIn" element={<SignIn />}></Route>
                
            </Routes>
        </Router>
    )
}
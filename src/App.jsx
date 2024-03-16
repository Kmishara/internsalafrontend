import React, { useEffect, useState } from "react";
import {  Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import Employee from "./components/Employee";
import Nav from "./components/nav";
import 'remixicon/fonts/remixicon.css'
 import { useDispatch, useSelector } from "react-redux";
 import { asynccurrentUser, asyncremoveUser } from "./store/Actions/userActions";
 import axios from "axios";



const App = () => {
    const [users, setUsers] = useState([]);
    const { isAuth, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asynccurrentUser());
    }, []);

   
    return  (
       
       
       <div className="">
       <Nav />
       {/* <Home/> */}
       <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/employesignup" element={<Employee />} />
   </Routes>

                          

       </div>
           
    )
};

export default App;






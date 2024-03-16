import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncsignup} from "../store/Actions/userActions";
import {  Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const [firstname, setfirstname] = useState("");
    const [email, setemail] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setpassword] = useState("");
    const [contact, setcontact] = useState("");
    const [city, setcity] = useState("");
    const [gender, setgender] = useState("");

    const Submithandle = (e) =>{
        e.preventDefault();
        console.log("form submitted");
          navigate("/signin")
        }
    const navigate = useNavigate();
    // const { isAuth } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const signupuser = () => {
        const newuser = {
            firstname:firstname,
           lastname:lastname,
           email:email,
          password:password,
          city:city,
          gender:gender,
          contact:contact
        };
         dispatch(asyncsignup(newuser));
    };
   

   
    return (
        <div className="w-screen h-screen bg-zinc-400 overflow-hidden">
            <div className="form w-[450px] h-[450px] translate-y-[20%] translate-x-[80%]   bg-slate-700 p-10">
            
            <h1>signup form</h1>
        <form  onSubmit={Submithandle} className="flex flex-col gap-3" >
        <input className="px-2" type="text" name="firstname" placeholder="firstname" onChange={(e)=> setfirstname(e.target.value)}  value={firstname} />
          <input  className="px-2" type="email" name="email"  placeholder="email"  onChange={(e)=> setemail(e.target.value)}  value={email} />
          <input  className="px-2" type="password" name="password" placeholder="password" onChange={(e)=> setpassword(e.target.value)}  value={password} />
          <input  className="px-2" type="text" name="lastname" placeholder="lastname" onChange={(e)=> setLastname(e.target.value)}  value={lastname} />
         
          <input className=" overflow-hidden flex" checked={gender === "Male"} type="radio"  onChange={(e)=> setgender(e.target.value)} value="Male"/> Male
           <input checked= {gender === "Female"} type="radio" onChange={(e)=> setgender(e.target.value)} value="Female"/> Female

          <input  className="px-2" type="text" name="city" placeholder="city" onChange={(e)=> setcity(e.target.value)}  value={city} />
          <input  className="px-2" type="number" name="contact" placeholder="contact" onChange={(e)=> setcontact(e.target.value)}  value={contact} />
          
         
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={signupuser}>Signup User</button>  
          
        </form>
            
            </div>
            <div className="w-[450px] h-[25px]   text-xl bg-white  translate-y-24 translate-x-[80%] ">
                  <h1 className="px-10">Already have a account ?   <Link className=" text-blue-700" to="/signin"> sign-in</Link>  </h1>
            </div>
        </div>
    );
};

export default Signup;

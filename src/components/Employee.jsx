import React from 'react'
import { useDispatch } from 'react-redux';
import { asyncsignupemploye } from '../store/Actions/userActions';
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
  
    const Submithandle = (e) =>{
        e.preventDefault();
        console.log("form submitted");
        navigate("/profile")

        }
       const navigate = useNavigate();


        const dispatch = useDispatch();
        const employeuser = () => {
            const newuser = {
                firstname:firstname,
               lastname:lastname,
               email:email,
              password:password,
              city:city,
              gender:gender,
              contact:contact
            };
             dispatch(asyncsignupemploye(newuser));
        };
    

        const [firstname, setfirstname] = useState("");
        const [email, setemail] = useState("");
        const [lastname, setLastname] = useState("");
        const [password, setpassword] = useState("");

  return (
    <div>
         <div className="w-screen h-screen bg-zinc-400 overflow-hidden">
            <div className="form w-[450px] h-[450px] translate-y-[20%] translate-x-[50%]   bg-slate-700 p-10">
            
            <h1>signup form</h1>
        <form  onSubmit={Submithandle} className="flex flex-col gap-3" >
        <input className="px-2" type="text" name="firstname" placeholder="firstname" onChange={(e)=> setfirstname(e.target.value)}  value={firstname} />
          <input  className="px-2" type="email" name="email"  placeholder="email"  onChange={(e)=> setemail(e.target.value)}  value={email} />
          <input  className="px-2" type="password" name="password" placeholder="password" onChange={(e)=> setpassword(e.target.value)}  value={password} />
          <input  className="px-2" type="text" name="lastname" placeholder="lastname" onChange={(e)=> setLastname(e.target.value)}  value={lastname} />
         
        
         
          
         
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={employeuser}>Signup</button>  
          
        </form>
            
            </div>
            
        </div>
    </div>
  )
}



export default Employee
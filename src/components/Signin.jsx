import React, { useEffect, useState } from "react";
import { asyncsignin } from "../store/Actions/userActions";
 import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const Submithandle = (e) =>{
        e.preventDefault();
        console.log("form submitted");
        navigate("/profile");
        }
  
    const { isAuth } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const signinuser = () => {
        const newuser = {
            email:email,
            password:password,
            
        };
        dispatch(asyncsignin(newuser));

      
    };

    useEffect(() => {
        isAuth && navigate("/");
    }, [isAuth]);

    return (
        <div>


           
        <div className="w-screen h-screen bg-zinc-400 overflow-hidden">
            <div className="form w-[450px] h-[450px] translate-y-[20%] translate-x-[50%]   bg-slate-700 p-10">
            
            <h1>signin form</h1>
        <form  onSubmit={Submithandle} className="flex flex-col gap-3" >
      
         
        <input type="email" name="email"  placeholder="email" onChange={(e)=> setemail(e.target.value)}  value={email} />
          <input type="password" name="password" placeholder="password" onChange={(e)=> setpassword(e.target.value)}  value={password} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "onClick={signinuser}>Signin User</button> 
          
         
          
         
         
        </form>
            
            </div>
            
        </div>

        </div>
    );
};

export default Signin;
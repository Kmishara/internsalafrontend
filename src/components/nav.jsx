import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
    const LogoutHandler = () => {
        console.log("click");
        dispatch(asyncremoveUser());
    };

  return (

    <>
    <div  className='w-[100%]  h-12  px-7 py-3 overflow-hidden   bg-slate-100 text-black'>
     
     
        <div className='flex  justify-between'>
        <h1 className='p text-3xl capitalize  text-black' >intern <span className=' text-blue-500'>sala</span></h1>
        
          <div className="link flex   gap-5  ">
               <i className="ri-search-line text-2xl"> search</i>
                
                <Link to="/signup">Login</Link> 
                 {/* <Link to="/profile">candidate sign-up</Link> */}
                
                <Link to="/employesignup">employee sign-up</Link>
          </div>
                 <button onClick={LogoutHandler}></button>
                   
        </div>
       
        {/* px-96 py-3 gap-5 */}
    </div>
     <hr className=' border-zinc-300' />
     </>
       )
      
}

export default nav
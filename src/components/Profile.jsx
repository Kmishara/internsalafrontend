import React, { useState } from 'react'

const Profile = () => {
 
  
 
    return (
    <div className='w-screen h-screen bg-slate-50 '>
    <div className='text flex  justify-center py-9 text-3xl font-black'>
    <h1 className=' capitalize'> hi khushi</h1>
      <img src="https://internshala.com/static/images/student/dashboard/waving-hand.svg" alt="" />
</div>  
    
    <div className='images flex gap-7  px-11 overflow-x-auto'>
    
    <img  src="https://internshala.com/static/images/pgc_course_specific_banners/ui_ux_course.png" alt="" />
  <img src="https://internshala-uploads.internshala.com/banner-images/home_new/dual_cert_launch_feb24-student.png.webp" alt="" />
     <img src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp" alt="" />
      <img src="https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp" alt="" />
    
    </div>
    {/* <div className="scrollbar-corner-sky-500 scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-32 overflow-scroll">
    <div class="h-64 w-[100vw] bg-slate-400"></div>
</div> */}
    </div>
    
   
    
    ); 
 

 
    }

export default Profile
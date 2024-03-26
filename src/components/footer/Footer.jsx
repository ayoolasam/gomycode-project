import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{}} className='  md:text-center py-4 mt-4'>

<>
           <div className='flex justify-between items-center w-[80%] mx-auto pt-20'>
            <a href=""><h1 className='logo text-red-500 text-2xl font-extrabold italic'>Kocina</h1></a>
            <div className='flex justify-around items-center gap-2 '>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTumblr /></a>
            <a href=""><FaYoutube /></a>
            </div>
            </div>

      
      {/*  footer links , row 1*/}
      
     <div className='flex:col gap-[2vw]  sm:flex justify-between items-center w-[80%] h-80 mx-auto pt-10 sm:gap-[4vw] list-none'>
        <div className='mb-5 text-xl'>
       <li>Presentations</li>
       <li>Professionals</li>
        <li>Stores</li>
        </div>

{/*  footer links, row 2*/}
     <div className='mb-5 text-xl'>
        <a href=""><li>Webinars</li></a>
        <a href=""><li>Workshops</li></a>
        <a href=""><li>Local Meetups</li></a>
        </div>

{/*  footer links, row 3*/}

        <div className='mb-5 text-xl'>
        <a href=""><li>Our Initiatives</li></a>
        <a href=""><li>Giving Back</li></a>
        <a href=""><li>Communities</li></a>
        </div>  

        {/*  footer links, row 4*/}

        <div className='mb-5 text-xl'>
        <a href=""><li>Contact Form</li></a>
        <a href=""><li>Work With Us</li></a>
        <a href=""><li>Visit Us</li></a>
        </div>

        </div>









    </>

    </div>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav  style={{marginTop:"20px"}}className='flex flex-wrap w-[80%] h-24 justify-between items-center  mx-auto' >
          
          <div className='flex justify-around gap-[8vw]'>
              <a href="/"><h1 className='logo text-red-500 font-extrabold'>Kocina</h1></a>
         
          <ul className='flex  items-center gap-[4vw] text-sm' >
          <a href="/"><li className=' transition-colors ease-in delay-150 font-bold hover:text-red-500'>Recipes</li></a>
          <a href=""><li className=' transition-colors ease-in delay-150  hover:text-red-500'>About</li></a>
         <a href=""> <li className=' transition-colors ease-in delay-150  hover:text-red-500'>Recipe</li></a>
         <a href=""> <li className=' transition-colors ease-in delay-150  hover:text-red-500'>Contact</li></a>
       </ul>
          </div>
        <Link to="/profile">
        <div className='flex items-center gap-[2vw] ' >
              <button className='bg-red-500 text-white rounded-3xl hover:bg-red-200 w-28 h-9 '> User Profile</button>
          </div>
        </Link>
         
       

     </nav>
    </div>
  )
}

export default Navbar
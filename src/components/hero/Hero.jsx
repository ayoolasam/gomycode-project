import React from 'react'
import '../../components/hero/hero.css'
const Hero = () => {
  return (
    <div>


            <div style={{marginTop:"100px"}} className=' hero-content self-center items-center bg-gradient-to-tr from-black-600 to-red-900 bg-slate-500  h-96 w-[100%]  bg-center  rounded-2xl  box-border relative'>
                {/* background image */}
 <img src="https://media.istockphoto.com/id/911987540/photo/tasting-exotic-restaurant-gourmet-food.jpg?s=612x612&w=0&k=20&c=uE7VAvd2R4RMi4RM7E2xtR8q85R1Gevzp38lLTd4R9c=" alt="" className='rounded-2xl bg-cover w-full h-full object-cover absolute mix-blend-overlay' /> 
       {/* Image text  */}
       <div className='pt-12 md:pt-24 pl-6 absolute'>
        <h1 className='text-white text-3xl md:text-5xl font-bold'>Select from a Multitude of recipes</h1>
        <p className='text-white text-xl font-light'>Appropriately integrate technically sound value with scalable <br />infomediaries negotiate sustainable strategic theme areas</p>
        <button className='transition duration-150 ease-out hover:ease-in  text-white'>Sign up for free</button>
           </div>
     </div>
     </div>
        
   
  )
}

export default Hero
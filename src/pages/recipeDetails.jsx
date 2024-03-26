import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeData } from '../db/RecipeData';
import { CiClock1 } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { FcRatings } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import '../pages/recipeDetails.css';


const recipeDetails = () => {
  const {id} =useParams()
const [details,setDetails]=useState(RecipeData[id])

    return (
      //first component
    <div  className=' flex-col w-screen  w-screen  items-center '>
      <div style={{width:"100%",justifyContent:"center",display:"flex" }}className='flex-wrap ' >
        <div style={{ width:"600px",height:"500px"}} className='sm:w-full'>
        <img  style={{objectPosition:"center",objectFit:"cover"}} className="w-full  h-full   rounded-lg"src={details.image}/>
        </div>

        <div  style={{width:"50%",minHeight:"600px",paddingLeft:"20px" ,display:"flex", flexDirection:"column"}}className=' hero-content sm:flex-col sm:w-[100%] py-4  justify-center'>
         
    
        <h1 className='font-bold flex text-4xl  mb-5'>{details.title}</h1>
        <div className='flex'><h2 className='mb-6 flex font-bold text-2xl'>{details.description}</h2></div>
      <div  className='flex gap-8 h-36 mb-8 items-center  justify-center text-center w-full '>
        <div className='bg-white-200 flex-col items-center  justify-center rounded-lg  mr-4 text-xl '> <div className='text-center flex items-center justify-center '><CiClock1 className='w-10 ml-4 h-8 '/></div> <h2>Active time</h2>{details.activeTime}</div>
        <div className='bg-white-200  flex-col items-center rounded-lg mr-4  text-xl'> <div className='text-center flex items-center justify-center '> <FaClock  className='w-10 h-8 ml-4'/></div><h2>Total time</h2>{details.totalTime}</div>
        <div  className='bg-white-200  flex-col items-center justify-center text-xl rounded-lg   mr-4'> <div className='text-center flex items-center justify-center '> <IoPeopleOutline className='w-10 h-8 ml-4'/></div> <h2>Yield</h2>{details. yield}</div>
    
      </div>

      <div className='flex justify-center bg-slate-300 w-32 self-center h-10 items-center rounded-lg px-4 mt-4  '><FaRegStar className='text-yellow-700' />{details.ratings}</div>
        </div>

</div>

<div  style={{width:"100%" ,minheight:"900px", justifyContent:"space-around", marginTop:"20px"}} className='  flex   mt-28 flex-wrap'>
<div  style={{width:"60%"}} className=' step-Content sm:w-screen  '>
<h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2 text-orange-400' /> <h1 className="text-orange-400">1.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200 border-b-2 font-bold pb-4 text-xl'> {details.steps}</div>
      <h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2 text-orange-400'/><h1 className="text-orange-400">2.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200  font-bold border-b-2 pb-4 text-xl'>{details.steps}</div>
      <h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2 text-orange-400' /><h1 className="text-orange-400">3.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200 font-bold border-b-2 pb-4 text-xl' >{details.steps}</div>
</div>
<div  style={{width:'200px'}}className=' px-12 py-4'>
  <h1 className='font-bold text-center text-2xl '>Ingredients</h1>
  <div className='flex-col items-center justify-center text-center mt-3.5'>
    <h1 className='font-bold border-solid border-black-200 border-b-2 text-xl  pb-4'>{details.ingredients[0]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2  text-xl pb-4'>{details.ingredients[1]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2  text-xl pb-4'>{details.ingredients[2]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 text-xl pb-4'>{details.ingredients[3]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 text-xl pb-4'>{details.ingredients[4]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 text-xl pb-4'>{details.ingredients[5]}</h1>
    
    
    </div>
</div>

  </div>
    </div>
  )
}

export default recipeDetails
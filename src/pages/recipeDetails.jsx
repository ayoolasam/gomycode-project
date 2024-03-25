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


const recipeDetails = () => {
  const {id} =useParams()
const [details,setDetails]=useState(RecipeData[id])

    return (
      //first component
    <div  className=' flex-col w-screen  w-screen bg-white-400 items-center  py-20 px-20'>
      <div  style={{width:"100%" ,height:"600px ",marginTop:"20px"}} className='bg-white-200 flex h-screen sm:items-center flex-wrap rounded-lg mt-2 ' >
        <div className='flex-1  '>
        <img  style={{objectPosition:"center",objectFit:"cover"}} className="w-full  h-full  sm:w-full rounded-lg"src={details.image}/>
        </div>
        <div className='flex-1 sm:flex-col bg-white-200  items-center justify-center sm:mt-4 px-4 '>
          <h1 className='font-bold text-5xl mb-5'>{details.title}</h1>
      <h2 className='mb-6 font-bold '>{details.description}</h2>
      <div  className='grid grid-cols-3 gap-4 h-36 mb-8 items-center  justify-center text-center w-full mr-24'>
        <div className='bg-white-200 flex-col items-center  justify-center rounded-lg  mr-4  '> <div className='text-center flex items-center justify-center '><CiClock1 className='w-10 ml-4 h-8 '/></div> <h2>Active time</h2>{details.activeTime}</div>
        <div className='bg-white-200  flex-col items-center rounded-lg mr-4 '> <div className='text-center flex items-center justify-center '> <FaClock  className='w-10 h-8 ml-4'/></div><h2>Total time</h2>{details.totalTime}</div>
        <div  className='bg-white-200  flex-col items-center justify-center  rounded-lg   mr-4'> <div className='text-center flex items-center justify-center '> <IoPeopleOutline className='w-10 h-8 ml-4'/></div> <h2>Yield</h2>{details. yield}</div>
    
      </div>
      <div className='flex justify-center bg-slate-300 w-28 h-10 items-center rounded-lg px-4 mt-4 ml-10 '><FaRegStar className='text-yellow-700' />{details.ratings}</div>
        </div>

</div>
<div  style={{width:"100%" ,height:"550px",  marginTop:"20px"}} className=' flex rounded-lg  mt-4 flex-wrap'>
<div className=' flex-1 '>
<h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2' /> <h1 className="text-orange-400">1.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200 border-b-2 pb-4'> {details.steps}</div>
      <h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2'/><h1 className="text-orange-400">2.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200 border-b-2 pb-4'>{details.steps}</div>
      <h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2 text-orabge-400' /><h1 className="text-orange-400">3.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200 border-b-2 pb-4' >{details.steps}</div>
</div>
<div  style={{width:'200px'}}className=' flex-1 px-12 py-4'>
  <h1 className='font-bold text-center mb-12'>Ingredients</h1>
  <div className='flex-col items-center justify-center text-center mt-3.5'>
    <h1 className='font-bold border-solid border-black-200 border-b-2  pb-4'>{details.ingredients[0]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[1]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[2]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[3]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[4]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[5]}</h1>
    
    
    </div>
</div>

  </div>
    </div>
  )
}

export default recipeDetails
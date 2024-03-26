// import React from "react";
import {FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";


const Card = () => {
    return (
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div className="banner">
         

 {/*------------------------------------- PARENT-BOX-------------------------------------------------------- */}          
          <div style={{display:"flex", alignItems:'center', justifyContent:'center', border:'5px solid skyblue', borderRadius:"20px 20px 0px 0px", width:"900px", flexDirection:"column"}}>
  
 {/*------------------------------------- PARENT-BOX-IMAGE------------------------------------------------------- */}

            <div style={{width:"100%", height:"200px", backgroundImage:"url(https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=612x612&w=0&k=20&c=X6CkFGpSKhNZeiii8Pp2M_YrBdqs7tRaBytkGi48a0U=)", backgroundSize:"cover",  borderRadius:"15px 15px 0px 0px", marginBottom:"50px"}}>

               {/*------------------------------------- NAVBAR------------------------------------------------------- */}
  
            <div style={{display:"flex", marginTop:"200px", marginLeft:"260px", color:"grey", alignItems:"center" }}>
                <span style={{padding:"5px", background:"black", borderRadius:"20px", color:"white"}}>Recipes</span>
                <span  style={{padding:"10px"}}>Health</span>
                <span style={{padding:"10px"}}>cooks</span>
                <span style={{padding:"10px"}}>followers</span>
                </div>
            </div>

             {/*------------------------------------- BOX-LIST------------------------------------------------------- */}
  
           <div style={{display:"flex", justifyContent:"center",  }}>
  
 {/*------------------------------------- PROFILE-BOX------------------------------------------------------- */}

           <div style={{direction:"flex", alignItems:"center", textAlign:"center", justifyContent:"center", flexDirection:"column", width:"200px", marginTop:"-80px", marginRight:"30px"}}>
              <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" style={{width:"60px", height:"60px", borderRadius:"50%", backgroundSize:"cover"}} />
              <h4>Rachel Chiamaka</h4>
                <h5 style={{color:"purple"}}>Executive Chef</h5>
                <h6 style={{color:"grey", margin:"20px", fontSize:"10px"}}>Tuck into quick healthy meals that you can make in under 30 minutes. We have got plenty of tasty salads, soups and mains to leave you ...</h6>

                 {/*------------------------------------- SOCIAL MEDIA ICON------------------------------------------------------- */}

                <div style={{display:"flex",marginLeft:"25px" }}>
  
               <a href="http://youtube.com">
                <GrYoutube style={{margin:"10px", color:"grey"}} />
               </a>
  
             <a href="http://twitter.com">
              <FaTwitter style={{margin:"10px", color:"grey"}}/>
             </a>
             
             <a href="http://instagram.com">
              < FaInstagram  style={{margin:"10px", color:"grey"}}/>
             </a>
  
             <a href="http://m.facebook.com">
             <FaFacebook  style={{margin:"10px", color:"grey"}}/>
             </a>
            </div>
  
 {/*------------------------------------- BOX-ONE------------------------------------------------------- */}
           </div>
  
            <div style={{display:"flex", flexDirection:"column", margin:"10px", alignItems:"center", justifyContent:"center",borderRadius:"5px", height:'300px', width:"180px", moZboxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", webKitBoxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",}}>
             <img src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{ moZboxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",
    webKitBoxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",
    boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", width:"170px", height:"170px",borderRadius:"5px",  marginBottom:"50px",backgroundSize:'cover'}}/>

    < FaAlignJustify />
     <h4 style={{color:"grey",padding:"10px",}}>Healthy Meal For You</h4>
    </div>

    {/*------------------------------------- BOX-TWO------------------------------------------------------- */}
  
            <div  style={{display:"flex", margin:"10px", flexDirection:"column", alignItems:"center", justifyContent:"center",borderRadius:"5px", height:'300px', width:"180px", moZboxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", webKitBoxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",}}>
             <img src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  style={{ 
    boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", width:"170px", height:"170px",borderRadius:"5px", marginBottom:"50px", backgroundSize:'cover'}}/>
     < FaAlignJustify />
     <h4 style={{color:"grey",padding:"10px",}}>Healthy Meal For You</h4>
    </div>
  
  {/*------------------------------------- BOX-THREE------------------------------------------------------- */}

             <div style={{display:"flex", margin:"10px", flexDirection:"column", alignItems:"center", justifyContent:"center", borderRadius:"5px", height:'300px', width:"180px", moZboxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", webKitBoxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)", boxShadow: "1px 3px 14px -1px rgba(0,0,0,0.60)",}}>
             <img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{  width:"170px", borderRadius:"5px", height:"170px", marginBottom:"50px", backgroundSize:'cover'}} />
              < FaAlignJustify />
             <h4 style={{color:"grey",padding:"10px",}}>Healthy Meal For You</h4>
            </div>
            </div>
          </div>
          
        </div>
        
  
  
      </div>
    )
  }
  
  export default Card

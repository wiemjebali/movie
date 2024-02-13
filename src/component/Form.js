import { useState } from "react"

const Form =({addmovie})=>{
 const [image,setImage]=useState()
 const [rating,setRating]=useState()
 const [name,setName]=useState()
const [description,setDecription]=useState()
const [type,setType]=useState()
  const handelAdd=()=>{

addmovie({image,rating,name,description,type})

  }
    return(


  <div className="signup-container" id="signup-container">
    <h2>Sign Up</h2>
    <form className="signup-form" action="/signup" method="post">
      <label htmlFor="username">Title:</label>
      <input type="text" id="username" name="username" required=""  onChange={(e)=>setName(e.target.value)}  />
      <label htmlFor="text">Description:</label>
      <input type="text" id="text" name="text" required="" onChange={(e)=>setDecription(e.target.value)}  />
      <label htmlFor="text">PosterURL:</label>
      <input type="text" id="text" name="text" required="" onChange={(e)=>setImage(e.target.value)} />
      <label htmlFor="text">Rate:</label>
      <input type="text" id="text" name="text" required=""  onChange={(e)=>setRating(e.target.value)}  />
    
      <label htmlFor="text">Rate:</label>
      <input type="text" id="text" name="text" required=""  onChange={(e)=>setType(e.target.value)}  />
      <button type="button" onClick={()=>handelAdd()}   >Sign Up</button>
    </form>
   
    
  </div>



    )
}
export default Form
import { useState } from "react"


function Task() {
 const[counter,serCounter]=useState(0);
 const[value,setValue]=useState(1);

 let result=0;


  for(let i = 0 ; i <= value ; i++){
   result = result + i;
 }
 
  return (
    <div>
     <input type="text" placeholder="Enter the text you want to sum" onChange={(e)=>setValue(e.target.value)} />
     <br />
     <h2>is your sum hear {result}</h2>
     <br />
     <br />
      <button onClick={()=>serCounter(counter+1)}>Counter:-{counter}</button>
      <br />
      <br />
      <button onClick={()=>serCounter(0)}>Reset</button>
    </div>
  )
}

export default Task

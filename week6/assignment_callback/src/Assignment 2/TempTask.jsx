import React, { useCallback, useState } from 'react'

function TempTask() {
  const[inputvalue , setInputvalue] = useState("");
  const[count,setcount] = useState(0);

  const resultinput =useCallback(() => {
    console.log(inputvalue);
    alert(inputvalue);
    setInputvalue("")
  },[inputvalue])
  return (
    <div>
      <h1>Assignment 2</h1>
      <br />
      <input type="text" 
        value={inputvalue}
        placeholder='enter the text'
        onChange={(e)=>setInputvalue(e.target.value)}
      /><br />
       <br/> 
      <button onClick={()=>resultinput()}>send</button>
      <br/> 
      <h2>count :{count}</h2>
      <h1><button onClick={()=>setcount(count+1)}>increment</button></h1>
    </div>
  )
}

export default TempTask

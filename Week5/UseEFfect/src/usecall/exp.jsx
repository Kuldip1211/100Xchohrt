import React, { useState } from 'react'
import Sem from './sem';

function Exp() {
 const [count,setCount] = useState(0);
  return (
    <div>
      <Sem title={"hello"} />
      <h1>usecallback</h1>
      <button onClick={()=>setCount(count+1)}>Count : {count}</button>
    </div>
  )
}

export default Exp

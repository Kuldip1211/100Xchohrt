import { useMemo } from "react";
import { useState } from "react";

// we create a array 
const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index : i,
    isMEgical : i === 29_000_000
  }
})

function Task_useMemo() {
  const [count , setCount] = useState(0);
  const [numbers ,setNubers] = useState(nums);

  // const megical  = numbers.find(item=>item.isMEgical === true)// expensive calculation

  const megical = useMemo(()=>numbers.find(item=>item.isMEgical === true),[numbers])
  return (
    <div>
      <h1>Megical {megical.index}</h1>
      <h2>usememo</h2>
      <button onClick={()=>{setCount(count+1)}}>count:- {count}</button>
    </div>
  )
}

export default Task_useMemo;

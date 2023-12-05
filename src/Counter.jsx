
import React from 'react';
import { useState } from 'react';

  
  function Counter() {

    const [count,setCounter] = useState(0);

    return (
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={()=>{setCounter(count+1)}}>Increment</button>
      </div>
    )
  }
  

export default Counter;

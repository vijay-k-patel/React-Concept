import React,{useState} from 'react'

function UseStateDtails() {
  const initialCount = 0 
  const [count,setCount] = useState(initialCount) 

  const incrementFive = () => {
    for(let i=0;i<5;i++){
      setCount(prevState => prevState + 1
      )
    }
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      { 
      count===0 ? 
      (
        <button onClick={() => setCount(count-1)} disabled>Decrement</button>
      ) : (
        <button onClick={() => setCount(count-1)}>Decrement</button>
      )
      }
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 5)}>Inc 5</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default UseStateDtails

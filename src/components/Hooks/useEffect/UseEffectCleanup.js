import React,{useState,useEffect} from 'react'
import RunEffectOnlyOnce from './RunEffectOnlyOnce'

function UseEffectCleanup() {
  const [display,setDisplay] = useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
      {display && <RunEffectOnlyOnce></RunEffectOnlyOnce>}
    </div>
  )
}

export default UseEffectCleanup

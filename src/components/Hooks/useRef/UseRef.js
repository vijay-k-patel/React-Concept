import React,{useState,useRef,useEffect} from 'react'

function UseRef() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()


  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    },1000)
    return () => {
      clearInterval(intervalRef.current)
    } 
  }, [])

  return (
    <div>
      Timer Value  - {timer}
      <button onClick={()=>clearInterval(intervalRef.current)}>clear interval</button>
    </div>
  )
}

export default UseRef

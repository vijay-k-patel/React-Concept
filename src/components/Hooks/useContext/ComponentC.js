import React,{useContext} from 'react'
import MainComponent, { FirstNameContext, LastNameContext } from './MainComponent'


function ComponentC() {
  const fName = useContext(FirstNameContext)
  const lName = useContext(LastNameContext)
  return (
    <div>
      {fName} + {lName}
    </div>
  )
}

export default ComponentC

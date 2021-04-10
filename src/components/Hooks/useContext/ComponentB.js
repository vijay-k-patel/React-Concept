import React,{useContext} from 'react'
import { FirstNameContext, LastNameContext } from './MainComponent'


function ComponentB() {

  const fName = useContext(FirstNameContext)
  const lName = useContext(LastNameContext)

  return (
    <div>
      {fName} + {lName}
    </div>
  )
}

export default ComponentB

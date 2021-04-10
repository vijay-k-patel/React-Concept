import React from 'react'
import ComponentA from './ComponentA';
import ComponentC from './ComponentC'

export const FirstNameContext = React.createContext()
export const LastNameContext = React.createContext()

function MainComponent() {
  return (
    <div>
      <FirstNameContext.Provider value={' vijay'}>
        <LastNameContext.Provider value={'patel'}>
          <ComponentA></ComponentA>
          <ComponentC></ComponentC>
        </LastNameContext.Provider>
      </FirstNameContext.Provider>
    </div>
  )
}

export default MainComponent

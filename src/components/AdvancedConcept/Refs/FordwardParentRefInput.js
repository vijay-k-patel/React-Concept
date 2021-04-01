import React, { Component } from 'react'
import FordwardRefInput from './FordwardRefInput'

class FordwardParentRefInput extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef=React.createRef()
  }

  clickHandler = () =>{ 
   this.inputRef.current.focus() 
  }
  
  render() {
    return (
      <div>
        <FordwardRefInput ref={this.inputRef}></FordwardRefInput>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default FordwardParentRefInput

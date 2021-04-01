import React, { Component } from 'react'
import RefsInput from './RefsInput'

class FocusInput extends Component {
  constructor(props) {
    super(props)
  
    this.componentRef = React.createRef()
  }
  clickHandler = () => {
   this.componentRef.current.focusInput()
  }
  
  render() {
    return (
      <div>
        <RefsInput ref={this.componentRef}></RefsInput>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput

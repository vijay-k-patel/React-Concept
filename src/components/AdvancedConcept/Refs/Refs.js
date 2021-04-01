import React, { Component } from 'react'

class Refs extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
    this.callBackRef = null
    // this.setCallBackRef = (element) => {
    //   this.callBackRef = element
    // }
  }
  componentDidMount(){
    //console.log(this.inputRef)
    this.inputRef.current.focus()
  }

  // componentDidMount(){
  //   if(this.callBackRef){
  //     this.callBackRef.focus()
  //   }
  //   //console.log(this.inputRef)
  // }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }
  
  render() {
    return (
      <div>
        {/* Refs */}
        <input type="text" ref={this.inputRef}></input>
        {/* <input type="text" ref={this.setCallBackRef}></input> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Refs

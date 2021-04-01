import React, { Component } from 'react'

class MountingB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:"vijay"
    }
    console.log('B constructor');
  }

  static getDerivedStateFromProps(props,state){
    console.log("B getDerivedStateFromeProps")
    return null
  }
  
  componentDidMount(){
    console.log("B compenentDidMount")
  }

  render() {
    console.log("B render")
    return (
      <div>
        Mounting B
      </div>
    )
  }
}

export default MountingB

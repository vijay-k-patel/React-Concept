import React, { Component } from 'react'
import MountingB from './MountingB';

class MountingA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:"vijay"
    }
    console.log('A constructor');
  }

  static getDerivedStateFromProps(props,state){
    console.log("A getDerivedStateFromeProps")
    return null
  }
  
  componentDidMount(){
    console.log("A compenentDidMount")
  }

  render() {
    console.log("A render")
    return (
      <div>
        Mounting A
        <MountingB></MountingB>
      </div>
    )
  }
}

export default MountingA

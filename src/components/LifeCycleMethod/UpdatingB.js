import React, { Component } from 'react'

class UpdatingB extends Component {
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

  shouldComponentDidUpdate(){
    console.log('B shoudComponentDidUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('B getSnapShotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('B compenentDidUpdate')
  }

  render() {
    console.log("B render")
    return (
      <div>
        Updating B
      </div>
    )
  }
}

export default UpdatingB

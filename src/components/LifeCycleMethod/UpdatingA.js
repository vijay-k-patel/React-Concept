import React, { Component } from 'react'
import UpdatingB from './UpdatingB';

class UpdatingA extends Component {
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

  shouldComponentDidUpdate(){
    console.log('A shoudComponentDidUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('A getSnapShotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('A compenentDidUpdate')
  }

  changeState=()=>{
    console.log('Change State Button Clicked')
    this.setState({
      name:'Updating'
    })
  }

  render() {
    console.log("A render")
    return (
      <div>
        Updating A
        <button onClick={this.changeState}>Change State</button>
        {/* <UpdatingB></UpdatingB> */}
      </div>
    )
  }
}

export default UpdatingA

import React, { Component, PureComponent } from 'react'
import Memo from '../Memo'
import PureComponentS from './PureComponentS'
import RegularCpmponentS from './RegularCpmponentS'

class ParentComponentS extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"vijay"
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:"vijay"
      })
    },3000)
  }
  
  render() {
    console.log('Parent comopnent')
    return (
      <div>
        Parent Component
        <Memo name={this.state.name}></Memo>
        {/* <RegularCpmponentS name={this.state.name}></RegularCpmponentS>
        <PureComponentS name={this.state.name}></PureComponentS> */}
      </div>
    )
  }
}

export default ParentComponentS

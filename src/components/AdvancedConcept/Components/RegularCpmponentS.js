import React, { Component } from 'react'

class RegularCpmponentS extends Component {
  render() {
    console.log('Regular component')
    return (
      <div>
        Regular Component 
        {this.props.name}
      </div>
    )
  }
}

export default RegularCpmponentS

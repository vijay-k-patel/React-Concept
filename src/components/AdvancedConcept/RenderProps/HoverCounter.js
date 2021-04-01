import React, { Component } from 'react'

export class HoverCounter extends Component {
  
  render() {
    const {count,incrementCounter} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCounter}>Hower {count} times</h2>
      </div>
    )
  }
}

export default HoverCounter

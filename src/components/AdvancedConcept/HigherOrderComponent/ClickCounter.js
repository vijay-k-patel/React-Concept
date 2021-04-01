import React, { Component } from 'react'
import UpdateCompenent from './Counter'

class ClickCounter extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
      </div>
    )
  }
}

export default UpdateCompenent(ClickCounter,5)

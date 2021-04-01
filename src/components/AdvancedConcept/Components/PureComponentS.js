import React, { PureComponent } from 'react'

class PureComponentS extends PureComponent {
  render() {
    console.log("Pure component")
    return (
      <div>
        Pure Component
        {this.props.name}
      </div>
    )
  }
}

export default PureComponentS

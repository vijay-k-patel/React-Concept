import React, { Component } from 'react'
import ComponentC from './ComponentC';
import ComponentF from './ComponentF';
import UserContext from './UserContext';

export class ComponentE extends Component {
  render() {
    return (
      <div>
        ComponentE context {this.context}
        <ComponentF></ComponentF>
      </div>
    )
  }
}
ComponentE.contextType = UserContext

export default ComponentE

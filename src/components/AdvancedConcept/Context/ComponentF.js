import React, { Component } from 'react'
import {UserConsumer} from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (userName) => {
            return (
              <h2>Hello {userName}</h2>
            )
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF

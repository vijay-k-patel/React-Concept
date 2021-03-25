import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild';

export class MethodAsPropsParent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent (ChildName) {
        alert(`Hello ${this.state.parentName} from ${ChildName}`)
    }
    render() {
        return (
            <div>
                <MethodAsPropsChild greetHandler={this.greetParent}></MethodAsPropsChild>
            </div>
        )
    }
}

export default MethodAsPropsParent

import React, { Component } from 'react';

class MessageState extends Component {

    constructor () {
        super()
        this.state = {
            msg: "welcome visiter",
            id:"1"
        }
        
    }
    
    changeMsg () {
        this.setState({
            msg: "Yes i am visiter",
            id:"200"
        })
    }

    render () {
        return (
            <div>
            <h1>{this.state.msg}</h1>
            <h2>{this.state.id}</h2>
            <button onClick={()=>this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}

export default MessageState;
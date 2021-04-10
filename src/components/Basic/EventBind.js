import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"Hello"
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    
    clickHandler = () => {
        this.setState({
            msg:"Good Bye"
        })
        console.log(this);
    }
    // clickHandler () {
    //     this.setState({
    //         msg:"Good Bye"
    //     })
    //     console.log(this);
    // }

    render() {
        return (
            <div>
                <h1>{ this.state.msg}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>{this.clickHandler()}}>Click</button> */}
                 <button onClick={this.clickHandler}>Click</button> 
            </div>
        )
    }
}

export default EventBind

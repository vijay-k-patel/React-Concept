import React, { Component } from 'react'

class CounterState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment () {
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        
        //increment one
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () => { console.log("callback value: " + this.state.count); });
        // console.log(this.state.count);

        //increment five
        this.setState((prevStatte) => ({
            count:prevStatte.count+1
        }))
        console.log(this.state.count)
    }
    decrement () {
        this.setState({
            count: this.state.count - 1
        })
    }
    incrementFive () {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count:- {this.state.count}</div>
                <button onClick={()=>{this.increment()}}>Increment</button>
                <button onClick={()=>{this.decrement()}}>Decrement</button>
                <button onClick={()=>{this.incrementFive()}}>INC 5</button>
            </div>
        )
    }
}

export default CounterState;

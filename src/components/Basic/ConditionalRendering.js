import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render () {

        // return(
        // this.state.isLoggedIn && <div>Welcome Vijay</div>
        // )

        return (
            this.state.isLoggedIn ? (
                <div>Welcome Vijay</div>
            ) : (
                <div>Welcome Anyone</div>
            )    
        )


        // let msg;
        // if (this.state.isLoggedIn) {
        //     msg=<div>Welcome Vijay</div>
        // } else {
        //     msg=<div>Welcome Anyone</div>
        // }

        // return (
        //     <div>{msg}</div>
        // )


        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome vijay</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Anyone</div>
        //     )
        // }


        // return (
        //     <div>
        //         <div>Wlecome Vijay</div>
        //         <div>Wlecome Anyone</div>
        //     </div>    
        // )
    }
}

export default ConditionalRendering

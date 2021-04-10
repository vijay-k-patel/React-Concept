import React, { Component } from 'react';

// class WelcomeClass extends Component {
//     render () {
//         return (
//             <h1>Hello {this.props.classProps}</h1>
//         )
//     }
// }

//Destructuring props
class WelcomeClass extends Component {
    render () {
        const { classProps } = this.props;
        return (
            <div>
                <h1>Hello {classProps}</h1>
            </div>    
        )
    }
}


export default WelcomeClass;
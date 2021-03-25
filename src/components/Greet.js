import React from 'react';

// const Greet = (props) => {
//      console.log(props)
//     return (
//         <h1>Hello {props.name}</h1>
        
//     );
// }

//Destructuring props
// const Greet = ({ name }) => {
//     return (
//         <div>
//             <h1>Hi {name}</h1>
//         </div>    
//     )
// }

const Greet = (props) => {
    const { name } = props;
    return (
        <div>
            <h1>Hi {name}</h1>
        </div>    
    )
}

export default Greet;
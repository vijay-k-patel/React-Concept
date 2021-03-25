import React from 'react'

function MethodAsPropsChild(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        </div>
    )
}

export default MethodAsPropsChild

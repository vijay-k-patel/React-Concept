// import React, { Component } from 'react'

// class UseState extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//      count:0  
//     }
//   }
//   incrementCount = () => {
//     this.setState({
//       count:this.state.count + 1
//     })
//   }
  
//   render() {
//     const {count} =this.state
//     return (
//       <div>
//         <button onClick={this.incrementCount}>Count {count} times</button>
//       </div>
//     )
//   }
// }

// export default UseState

import React,{useState} from 'react'

function UseState() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count} times</button>
    </div>
  )
}

export default UseState

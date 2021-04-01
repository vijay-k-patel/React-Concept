import React from 'react'

// function FordwardRefInput() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
// }

const FordwardRefInput = React.forwardRef((props,ref) => {
  return(
    <div>
      <input type="text" ref={ref}></input>
    </div>
  )
}) 

export default FordwardRefInput

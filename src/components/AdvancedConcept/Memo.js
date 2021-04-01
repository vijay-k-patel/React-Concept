import React from 'react'

function Memo({name}) {
  console.log("Memo Component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memo)

import React from 'react'

function Column() {
  const items = ["VIjay","patel"]
  return (
    <>
      {
        items.map(item=>(
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item}</p>
          </React.Fragment>
        ))
      }
      {/* <td>Name</td>
      <td>Vijay</td> */}
    </>
  )
}

export default Column

import React,{useState} from 'react'

function UseStateObject() {
  const [name,setName] = useState({fName:'',lName:''})
  return (
    <div>
      <form>
        <input type="text" 
          value={name.fName}
          onChange={e => setName({...name, fName:e.target.value})}
        >
        </input>
        <input type="text" 
          value={name.lName}
          onChange={e => setName({...name, lName:e.target.value})}
        >
        </input>

        <h2>FirstName : {name.fName}</h2>
        <h2>LastName : {name.lName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default UseStateObject

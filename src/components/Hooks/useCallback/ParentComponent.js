import React,{useState,useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {

  const [age, setAge] = useState(20)
  const [salary, setSalary] = useState(1000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age])

  const incrementSalery = useCallback(() => {
    setSalary(salary + 500)
  },[salary])

  return (
    <div>
      <Title></Title>
      <Count text="Age" count={age}></Count>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}></Count>
      <Button handleClick={incrementSalery}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent

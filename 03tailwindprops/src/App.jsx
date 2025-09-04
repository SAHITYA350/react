import React from 'react'
import Card from './component/Card'

const App = () => {
  let obj = {
    name: "Sahitya",
    age:20
  }
  const arr = [1,2,3]
  return (
    <>
    <h1 className='text-2xl bg-green-600 rounded-2xl p-3 flex justify-center items-center w-[10vw] m-[50vh]'>Tailwind Css</h1>
    <Card learn="chaiaurcode" myobj={obj} Array={arr} p={69} />
    <Card learn="Sahitya Ghosh" myobj={obj} Array={arr} />
    </>
  )
}

export default App
import React from 'react'

const App = () => {

  const[num, setNum] = React.useState({user: "Kunal", age: 20})

  function btn() {
    const newnum = {...num};
    newnum.user = "nipun"
    newnum.age = 34
    setNum(newnum)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btn}>click me</button>
    </div>
  )
}

export default App

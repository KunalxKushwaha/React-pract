import React from 'react'

const App = () => {

  const [name, setName] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted by,', name)
    setName('')
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=> {
          setName(e.target.value)
        }}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Kunal' age={19}/>
       <Card user='Aman' age={30}/>
      
    </div>
  )
}

export default App

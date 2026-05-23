import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='py-10 px-18 flex items-center gap-10 h-170'>
        <LeftContent/>
        <RightContent user={props.users}/>
      
    </div>
  )
}

export default Content

import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = () => {
  return (
    <div className='py-10 px-18 flex items-center gap-10 h-170 bg-amber-900'>
        <LeftContent/>
        <RightContent/>
      
    </div>
  )
}

export default Content

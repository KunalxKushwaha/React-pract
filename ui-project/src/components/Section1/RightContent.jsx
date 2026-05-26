import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.user);
  return (
    <div className='h-full overflow-x-auto rounded-4xl w-2/3 flex flex-nowrap gap-10 p-6'>
      {props.user.map(function(elem,idx) {
        return <RightCard key={idx} idx={idx} img={elem.img} tag ={elem.tag} color={elem.color}/>
      })}
    </div>
  )
}

export default RightContent

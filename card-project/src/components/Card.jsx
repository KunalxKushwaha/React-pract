import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    
      <div className="card">

        <div className="top">
          <img src={props.Logo} alt="" />
          <button>Save <Bookmark /> </button>
        </div>

        <div className="center">
          <h3>{props.Company} <span>{props.Post}</span></h3>
          <h2>{props.Role}</h2>

          <div className='tag'>
            <h4>{props.Type}</h4>
            <h4>{props.Level}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
           
              <h3>{props.Salary}</h3>
              <p>{props.Loc}</p>
            
          </div>
           <button>Apply Now</button>
        </div>


      </div>
    
  )
}

export default Card

import React from 'react'
import "./mock.scss";
// import demo from './demo.svg'

const Mock = ({name,title,demo,fetc}) => {

  const handelclick = ()=>{
    console.log(fetc)
  }

  return (
    <div className='mock' onClick={handelclick} >
        <img src={demo} alt="" />
        <div className="mock_name">
          <h5>{name}</h5>
          <p>{title}</p>
        </div>

    </div>
  )
}

export default Mock
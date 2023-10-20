import React from 'react'
import "./mock.scss";
// import demo from './demo.svg'
// import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom"
const Mock = ({name,title,demo,fetc}) => {
  const navigate = useNavigate();

  const handelclick = ()=>{
    navigate("/unit")
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
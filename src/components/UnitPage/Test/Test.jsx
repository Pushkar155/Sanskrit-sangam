import React from 'react'
import "./test.scss"
// import image from "./test.svg";
import {useNavigate} from "react-router-dom"

const Test = ({image,unit,type}) => {
  const navigate = useNavigate();
  const handelclick = ()=>{
    navigate("/ques")
  }
  return (
    <div className='test' onClick={handelclick}>
        <div className="test_navbar">
            <h4 className='h5'>{unit}</h4>
            <h5>{type}</h5>
        </div>
        <img src={image} alt="" />

    </div>
  )
}

export default Test
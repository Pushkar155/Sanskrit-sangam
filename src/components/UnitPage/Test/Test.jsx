import React from 'react'
import "./test.scss"
import image from "./test.svg";

const Test = () => {
  return (
    <div className='test'>
        <div className="test_navbar">
            <h6 className='h5'>Unit 1</h6>
            <h6>Quiz</h6>
        </div>
        <img src={image} alt="" />

    </div>
  )
}

export default Test
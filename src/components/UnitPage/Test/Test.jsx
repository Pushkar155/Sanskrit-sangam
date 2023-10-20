import React from 'react'
import "./test.scss"
import image from "./test.svg";

const Test = () => {
  return (
    <div className='test'>
        <div className="test_navbar">
            <h4 className='h5'>Unit 1</h4>
            <h5>Quiz</h5>
        </div>
        <img src={image} alt="" />

    </div>
  )
}

export default Test
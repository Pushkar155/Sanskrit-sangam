import React from 'react'
import './unit.scss';
import image from "../home/image.png";
import Test from './Test/Test';

const Unit = () => {
  return (
    <div className='unit'>
        <div className="unit_nav">
            <img src={image} alt="" />
        </div>
        <div className="unit_data">
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>

        </div>


    </div>
  )
}

export default Unit
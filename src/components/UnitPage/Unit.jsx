import React from 'react'
import './unit.scss';
import image from "../home/image.png";
import Test from './Test/Test';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';

const Unit = () => {
  return (
    <div className='unit'>
        <div className="unit_nav">
            <img src={image} alt="" />
        </div>
        <div className="text_data">
                <QuizRoundedIcon className='icon'/>
                <h4>Q </h4><h6>uiz</h6>   
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

        <div className="text_data">
                <QuizRoundedIcon className='icon'/>
                <h4>M</h4><h6>ock Test</h6>   
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
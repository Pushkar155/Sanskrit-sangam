import React from 'react'
import './unit.scss';
import image from "../home/image.png";
import Test from './Test/Test';
import mock from "./test.svg"
import test from "./quiz.svg"
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
            <Test unit="Unit 1" image={test} type="Quiz"/>
            <Test unit="Unit 2" image={test} type="Quiz"/>
            <Test unit="Unit 3" image={test} type="Quiz"/>
            <Test unit="Unit 4" image={test} type="Quiz"/>
            <Test unit="Unit 5" image={test} type="Quiz"/>
            <Test unit="Unit 6" image={test} type="Quiz"/>
        </div>

        <div className="text_data">
                <QuizRoundedIcon className='icon'/>
                <h4>M</h4><h6>ock Test</h6>   
            </div>
        <div className="unit_data">
            <Test image={mock} unit="Unit 1" type="Mock"/>
            <Test image={mock} unit="Unit 2" type="Mock"/>
            <Test image={mock} unit="Unit 3" type="Mock"/>
            <Test image={mock} unit="Unit 4" type="Mock"/>
            <Test image={mock} unit="Unit 5" type="Mock"/>
            <Test image={mock} unit="Unit 6" type="Mock"/>
            <Test image={mock} unit="Unit 7" type="Mock"/>
            <Test image={mock} unit="Unit 8" type="Mock"/>
            <Test image={mock} unit="Unit 9" type="Mock"/>
            <Test image={mock} unit="Unit 10" type="Mock"/>
            {/* <Test image={mock} unit="Unit 1" type="Mock"/> */}
            
        </div>


    </div>
  )
}

export default Unit
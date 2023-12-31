import React from 'react'
import "./home.scss"
import image from "./image.png"
import Mock from './mock test/Mock'
import demo from "../home/mock test/demo.svg";
import paper from "../home/mock test/paper.svg";
import under from "../home/mock test/boy on graduation-pana.svg";
import post from "../home/mock test/Learning-cuate.svg";
import quiz from "../home/mock test/quiz.png";
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';

const Home = () => {
    
  return (
    <div className='home'>
        {/* <div className="block">
            
        </div> */}
        <div className="navbar">
            <img src={image} alt="" />
        </div>
        <div className="add2">
            Ads
        </div>
        <div className="text">
            <h6>संस्कृत संगम एक प्रश्नोत्तरी मंच है जिसमें हम आपके संस्कृत भाषा कौशल का अभ्यास करने के लिए विभिन्न प्रकार के प्रश्नोत्तरी प्रश्न प्रदान करते हैं।</h6>
        </div>

        <div className="home_horizontal">
            <div className="text_data">
                <QuizRoundedIcon className='icon'/>
                <h4>Q </h4><h6>uiz</h6>   
            </div>
            
            <div className="component active">
                <Mock name="UGC" title="( University Grant Commission )" demo={quiz} />
                <Mock name="PGT" title="Post Graduate Teacher" demo={quiz} />
                <Mock name="TGT" title="Training Graduate Teacher" demo={quiz} />
            </div>
        </div>
        <div className="add">
            Ads
        </div>

        <div className="home_horizontal">
        <div className="text_data">
            <ArticleRoundedIcon className='icon'/>
             <h4>M</h4><h6>ock Test</h6>   
            </div>
            <div className="component">
                <Mock name="UGC" title="University Grant Commission" demo={post}  fetc="Mock-ugc"/>
                <Mock name="PGC" title="Post Graduate Teacher" demo={under} fetc="Mock-pgc"/>
                <Mock name="TGT" title="Training Graduate Teacher" demo={demo} fetc="Mock-tgt"/>
            </div>
        </div>
        <div className="home_horizontal">
        <div className="text_data">
            <RocketLaunchRoundedIcon className='icon'/>
             <h4>P</h4><h6>revious Year Papers</h6>   
            </div>
            <div className="component">
                <Mock name="UGC" title="University Grant Commission" demo={paper}/>
                <Mock name="PGT" title="Post Graduate Teacher" demo={paper} />
                <Mock name="TGT" title="Training Graduate Teacher" demo={paper} />
            </div>
        </div>

 
    </div>
  )

}

export default Home
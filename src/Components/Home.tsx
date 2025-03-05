import React from 'react'
import myPic from "../assets/myPic.jpeg"; 
import './Home.css'

const Home = () => {
  return (
    <>
        <div className="home-container">
            <div className="text-content">
                <h1>Sayed Iqbal Sadat</h1>

                <br />

                <h3>CS First-Year Undergraduate Student</h3>

                <br />
                
                <p>I'm a first-year Computer Science student with a passion 
                  for coding, problem-solving, and all things tech. I love building 
                  cool projects, exploring new technologies, and constantly challenging 
                  myself to learn and grow. Excited to see where this journey takes me!
                </p>
                <button>Connect With Me</button>
            </div>
            <img src={myPic} alt="My Picture"/>
        </div>
    </>
    
  );
};

export default Home;

import React from 'react'
import myPic from "../assets/myPic.jpeg"; 
import './Home.css'
import Navbar from "./Navbar"

const Home = () => {
  return (
    <>
        <Navbar />
        <div className="home-container">
            <img src={myPic} alt="My Picture"/>
            <div className="text-content">
                <h1>Hi, I'm Sayed Sadat! 👋</h1>
                <br></br>
                <p>I'm a passionate Computer Science undergraduate in my first year, exploring the world of software development, problem-solving, and technology.</p>
            </div>
      
        </div>
    </>
    
  );
};

export default Home;

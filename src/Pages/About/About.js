import React from 'react';
import './About.css';
import myphoto from '../images/banner/anisur.png'
const Resume = () => {
    return (
        <div className="my-dream flexible-container">

            <div className="half-width"> <img className='image' src={myphoto} alt="Anisur" /></div>
            <div className="half-width left">
                <div>
                    <h1>My Dream</h1>
                    <h3>Become a Computer scientist</h3>
                    <p>
                        I’m Anisur Rahman From Dhaka, Bangladesh. I am currently studying at the University of the People, USA (Remote),this is my 1st year of study. My major is computer science. In the meantime, I have completed a web development course (MERN stack) from Programming Hero.<br /> I am passionate about computer science because I love programming. I have a deep interest in software engineering, In-Sha-Allah, which will be my MS program in higher education.
                        My course focus is primarily on front-end, secondarily on back-end web applications. I have completed 12 projects in my courses, 2 full-stack projects, and the rest of them are front-end and front-end functionalities.
                    </p>
                    <a className="download" href="https://drive.google.com/file/d/1uaKu5wo3NvIzFETHjfx7-rnFm5Fj77k4/view?usp=sharing" target="_blank">download
                        Resume</a>
                </div>
            </div>


        </div>
    );
};

export default Resume;
import React from 'react';

import banner from '../../images/banner/banner.jpg'

import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <>

            <div>
                <img className="d-block w-100"
                    src={banner}
                    alt="First slide"></img>
                <caption className="caption">
                    <div className="text-style">
                        <h2 className='ps-3 pb-2'>Hi! I'm</h2>
                        <h1><span className="style-header">Anisur </span>Rahman</h1>
                        <p>A professional Web Developer || MERN Stack</p>
                        <button className="book-btn"><Link to="/contactme">Contact Me</Link></button>

                    </div>
                </caption>
            </div>

        </>
    );
};

export default Banner;
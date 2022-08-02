import React from 'react';
import image from '../../Images/MacbookPro.jpeg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="header-container">
                <div className="header-details">
                    <h1>Your Next Laptop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus soluta veritatis consequatur aspernatur dignissimos ipsum dolor perspiciatis omnis eaque? Dolorem quisquam dolore cum quaerat consequuntur dicta molestias blanditiis ad.</p>
                </div>
                <div className="header-image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
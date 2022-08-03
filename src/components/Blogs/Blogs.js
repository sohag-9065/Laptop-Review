import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='questionsAndAnswer-container'>
            <div>
                <h1>What is Context API?</h1>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            </div>
            <div>
                <h1>What are Semantic Elements?</h1>
                <p>A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: "div" and "span" - Tells nothing about its content. Examples of semantic elements: "form" , "table", and "article" - Clearly defines its conten</p>
            </div>
            <div>
                <h1>CSS Inline vs Inline-Block vs Block</h1>
                <p><strong>Inline:</strong> The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.</p>
                <p><strong>Inline-block:</strong> It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.</p>
                <p><strong>Block:</strong> The element will start on a new line and occupy the full width available. And you can set width and height values.</p>
            </div>
        </div>
    );
};

export default Blogs;
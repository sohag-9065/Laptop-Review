import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const { name, rating, comments} = review;
    return (
        <div className='review-container'>
            <div className="cart">
                <h2>Name: {name}</h2>
                <p><span className='review-heading'>Review:</span> {comments}</p>
                <p><span className='review-heading'>Rating:</span> {rating} star</p>
            </div>
        </div>
    );
};

export default Review;
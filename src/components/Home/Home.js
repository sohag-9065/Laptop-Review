import {  useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import image from '../../Images/MacbookPro.jpeg'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReview] = useReview();

    const nagigate = useNavigate();

    const showReview = () =>{
        nagigate("/Review");
    }
    return (
        <div className='home-container'>
            <div className="header-container">
                <div className="header-details">
                    <h1>MacBook Pro</h1>
                    <p>Our most powerful laptops, MacBook Pros are supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch ID, and brilliant Retina display.</p>
                    <a className='link-design' href="https://www.apple.com/macbook-pro/" target={'_blank'} rel="Macbook Websote">Live Reviews</a>
                </div>
                <div className="header-image">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="home-review-container">
                <h1 className='heading'>Customer Review(3)</h1>
                <div className="review">
                    {
                        reviews.slice(0,3).map(review => <Review 
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div className="bottom-button ">
                    <button className='link-design ' onClick={showReview}>Show All</button>
                {/* <Link className='link-design ' to="/Review">See All Review</Link> */}
                </div>
            </div>
        </div >
    );
};

export default Home;
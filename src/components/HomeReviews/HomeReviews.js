import useReviews from '../../hooks/useReviews';
import CustomLink from '../CustomLink/CustomLink';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './HomeReviews.css'

const HomeReviews = (props) => {
    const [reviews, setReviews] = useReviews();
    const threeReview = reviews.slice(0, 3);
    console.log(threeReview);
    return (
        <div>
            <h1 className='customer-review'>Customer Reviews({threeReview.length})</h1>
            <div className='reviews-section'>
                <div className='reviews-container'>
                    {
                        threeReview.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
            <div className='all-review'>
                <CustomLink to="/reviews" className='all-review-btn'>All Reviews</CustomLink>
            </div>
        </div>
    );
};

export default HomeReviews;
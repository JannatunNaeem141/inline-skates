import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './HomeReviews.css'

const HomeReviews = (props) => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h1 className='customer-review'>Customer Reviews({reviews.length})</h1>
            <div className='reviews-section'>
                <div className='reviews-container'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
            <div className='all-review'>
                <button onClick={() => props.pathToAllReview(props.Review)} className='all-review-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default HomeReviews;
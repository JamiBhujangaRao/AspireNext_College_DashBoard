import { useEffect, useState } from 'react';
import Header from '../Header';
import ReviewCard from '../../components/ReviewCard';
import { ReviewsContainer, ReviewsContent, ReviewsGrid } from './styledComponents';
import { getReviews, addReview } from '../../api/reviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({
        collegename: '',
        username: '',
        rating: '',
        comment: '',
    });

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const data = await getReviews();
            setReviews(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addReview(formData);
            fetchReviews(); // refresh
            setFormData({ collegename: '', username: '', rating: '', comment: '' });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Header />
            <ReviewsContainer>
                <h2>Reviews</h2>
                <ReviewsContent>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="collegename"
                            placeholder="College Name"
                            value={formData.collegename}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="username"
                            placeholder="Your Name"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="rating"
                            placeholder="Rating (1-5)"
                            value={formData.rating}
                            onChange={handleChange}
                            min="1"
                            max="5"
                            required
                        />
                        <textarea
                            name="comment"
                            placeholder="Your Comment"
                            value={formData.comment}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Add Review</button>
                    </form>
                    <ReviewsGrid>
                        {reviews.map((review) => (
                            <ReviewCard key={review.review_id} review={review} />
                        ))}
                    </ReviewsGrid>
                </ReviewsContent>
            </ReviewsContainer>
        </>
    );
};

export default Reviews;

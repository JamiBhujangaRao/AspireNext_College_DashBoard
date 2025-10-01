import React from 'react';
import { ReviewCardWrapper, CollegeName, UserName, Rating, Comment } from './styledComponents';

const ReviewCard = ({ review }) => {
    return (
        <ReviewCardWrapper>
            <CollegeName>{review.collegename}</CollegeName>
            <UserName>by {review.username}</UserName>
            <Rating>{'⭐'.repeat(review.rating)}</Rating>
            <Comment>{review.comment}</Comment>
        </ReviewCardWrapper>
    );
};

export default ReviewCard;

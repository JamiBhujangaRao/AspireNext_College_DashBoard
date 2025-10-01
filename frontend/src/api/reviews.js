import API from "./config";

export const getReviews = async () => {
    const { data } = await API.get('/reviews');
    return data;
};

export const addReview = async (review) => {
    const { data } = await API.post("/reviews", review);
    return data;
};

import {csrfFetch} from './csrf';

const LOAD_REVIEWS = 'comments/LOAD_REVIEWS';
const ADD_REVIEW = 'comments/ADD_REVIEW';
const EDIT_REVIEW = 'comments/EDIT_REVIEW';
const DELETE_REVIEW = 'comments/DELETE_REVIEW';

/***** Actions ****/

const loadReviews = reviews => ({
    type: LOAD_REVIEWS,
    reviews
});

const addReview = review => ({
    type: ADD_REVIEW,
    review
})


const editReview = review => ({
    type: EDIT_REVIEW,
    review
})

const deleteReview = review => ({
    type: DELETE_REVIEW,
    review
})

/***** Thunk Actions ****/

export const getReviews = (id) => async dispatch => {
 
    const response = await csrfFetch(`/api/reviews/${id}`);
    if (response.ok) {
        const review = await response.json();
        console.log('--------------------', review)
        dispatch(loadReviews(review))
    }
};

export const createReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/review/${review.eventId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    
    if (response.ok) {
        const newReview = await response.json();
        dispatch(addReview(newReview))
    }
};

export const updateReview = (review) => async dispatch => {
    const {id} = review
    review.log('review', review)
    console.log('id', id)
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify(review),
    });
    if (response.ok) {
        const editedReview = await response.json();
        dispatch(editReview(editedReview))
        return editedReview
    }
}

export const removeReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(deleteReview(id))
    }
}

/***** Reducer ****/

const initialState = {}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS: {
            const newAllReviews = {}
            action.reviews.forEach(review => {
                newAllReviews[review.id] = review
            });
            return {
                ...newAllReviews, ...state
            }
        }

        case ADD_REVIEW: {
            const newAddReview = {...state}
            newAddReview[action.review.id] = action.review
            return newAddReview
        }

        case EDIT_REVIEW: {
            const newEditReview = {...state}
            newEditReview[action.review.id] = action.review
            return newEditReview
        }

        case DELETE_REVIEW: {
            const newDeleteReview = {...state}
            delete newDeleteReview[action.review]
            return newDeleteReview
        }
        default:
            return state
    }
}

export default reviewReducer

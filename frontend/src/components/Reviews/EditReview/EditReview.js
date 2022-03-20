import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateReview } from "../../../store/reviews";
import "./EditReview.css";

const EditReviewForm = ({ onClose, reviewId }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const eventId = +id
  const reviews = useSelector((state) => state.review);
  // const reviewsArr = Object.values(reviews);
  // const eventReviews = reviewsArr.filter((review) => review.eventId === eventId);
  // console.log('444444', reviewId)
  // console.log('7777777777777', reviews)
  // console.log('6666666666666', reviews[reviewId].review)


  const history = useHistory();

  const [review, setReview] = useState(reviews[reviewId].review);
  const [rating, setRating] = useState(reviews[reviewId].rating);
  const [created_at] = useState(reviews[reviewId].created_at);
  const [errorValidator, setErrorValidator] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!review) errors.push("Please provide a review");
    if (!rating) errors.push("Please provide a rating");
    if (rating < 1 || rating > 5)
      errors.push("Rating must been between 1 or 5");
    setErrorValidator(errors);
  }, [review, rating]);

  const handleEditReview = async (e) => {
    e.preventDefault();
    const payload = {
      reviewId,
      review,
      rating,
      created_at,
    };

    const updatedReview = await dispatch(updateReview(payload));
    if (updatedReview) {
      history.push(`/events/${id}`);
      onClose(false);
    }
  };

  return (
    <div className="edit-review-container">
      <ul className="errors-list">
        {errorValidator.map((error) => (
          <li className="error-list" key={error}>
            {error}
          </li>
        ))}
      </ul>
      <form className="edit-review" onSubmit={handleEditReview}>
        <div className="review">
          <label> Update Review </label>
          <textarea
            type="text"
            placeholder="Review"
            // required
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="edit_review_input-bar"
          />
        </div>
        <div className="rating">
          <label> Update Rating </label>
          <input
            type="number"
            min="1"
            max="5"
            step="1"
            // required
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="edit_rating_input-bar"
          />
        </div>
        <div className="created-at-input">
          <input type="hidden" value={created_at} />
        </div>
        <div className="edit-review">
          <button
            className="edit-review-button"
            type="submit"
            disabled={errorValidator.length > 0}
          >
            Submit
          </button>
          <button className="cancel-edit-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReviewForm;

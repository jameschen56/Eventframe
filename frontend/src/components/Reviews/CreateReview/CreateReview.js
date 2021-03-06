import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReview } from "../../../store/reviews";

const CreateReview = ({ onClose }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.event[id]);
  const history = useHistory();

  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [errorValidator, setErrorValidator] = useState([]);

  useEffect(() => {
    const errors = [];
    if (!review) errors.push("Please provide a review");
    if (!rating) errors.push("Please provide a rating");
    if (rating < 1 || rating > 10) errors.push("Rating must be between 1 to 10");
    setErrorValidator(errors);
  }, [review, rating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventId: id,
      userId: user.id,
      review,
      rating,
    };

    const newReview = await dispatch(createReview(payload));

    if (newReview) {
      history.push(`/events/${event.id}`);
      onClose(false);
    }
  };

  return (
    <div className="new-review-container">
      <form className="new-review-form" onSubmit={handleSubmit}>
        <ul className="errors-list">
          {errorValidator.map((error) => (
            <li className="error-list" key={error}>
              {error}
            </li>
          ))}
        </ul>
        <div className="review">
          <label> Review </label>
          <textarea
            type="text"
            placeholder="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="add_review_input-bar"
          />
        </div>
        <div className="rating">
          <label> Rating </label>
          <input
            type="number"
            min="1"
            max="10"
            step="1"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="add_rating_input-bar"
          />
        </div>
        <div className="add-review">
          <button
            className="add-product-button"
            type="submit"
            disabled={errorValidator.length > 0}
          >
            Submit
          </button>
          <button className="cancel-add-button" type="true" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateReview;

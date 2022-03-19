import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviews } from "../../../store/reviews";
import { removeReview } from "../../../store/reviews";
import { useHistory } from "react-router-dom";
import EditReviewModal from "../EditReview";
import "./Reviews.css";

const AllReviews = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const xxx = useSelector((state) => console.log('EEEEEE', state));
  const userId = useSelector((state) => state.session.user?.id);
  const reviews = useSelector((state) => state.review);
  console.log('reviews', reviews)
  const event = useSelector((state) => state.event[id]);
  const history = useHistory();
  const reviewsArr = Object.values(reviews);
  console.log('MMMMMMMMMMMM', id)

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  function handleReviewDelete(e, reviewId) {
    e.preventDefault();
    dispatch(removeReview(reviewId));
    history.push(`/events/${id}`);
  }

  return (
    <div className="reviews-content">
      <h2>Reviews</h2>
      {reviewsArr?.map((review) => {
        if (review.eventId === event.id) {
          return (
            <div key={review?.id} className="review-container">
              {/* <div className="user-name">{review.username}{" "}{review.created_at.slice(5, 17)}</div>
              <div className="star-rating">
                {Array(review.rating)
                  .fill(
                    <span>
                      <i className="fas fa-star fa-xs"></i>
                    </span>
                  )
                  .map((star, idx) => (
                    <span key={idx}>{star}</span>
                  ))}
              </div>
              <div className="date"></div> */}
              <div>{review?.review}</div>
              {userId === review.userId && (
                <div>
                  <EditReviewModal reviewId={review?.id} />
                  <button
                    className="delete-review-button"
                    onClick={(e) => handleReviewDelete(e, review?.id)}
                  >
                    Delete Your Review
                  </button>
                </div>
              )}
            </div>
          );
        } else return null;
      })}

    </div>
  );
};

export default AllReviews;

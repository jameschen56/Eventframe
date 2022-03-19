import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleEvent, deleteSingleEvent } from "../../../store/event";
import EditEventModal from "../EditEvent";
import AllReviews from "../../Reviews/AllReviews";
import CreateReview from "../../Reviews/CreateReview/";

const SingleEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const event = useSelector((state) => state.event[id]);
  const user_Id = useSelector((state) => state.session.user?.id);
  const reviews = useSelector((state) => state.review);
  const reviewsArr = Object.values(reviews);
  const eventReviews = reviewsArr.filter(
    (review) => review.userId === user_Id
  );

  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, [dispatch, id]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSingleEvent(id))
    .catch(async err => {
      const errors = await err.json()
      // console.log('-----------------' , errors)
    })
    history.push('/')
  }

  return (
    <div className="event_detail-container">
      <div className="event-info">
        <div className="event-image">
          <img
            width={350}
            height={450}
            alt={event?.title}
            src={
              event?.imageUrl
                ? event?.imageUrl
                : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
            }
          />
        </div>
        <div>{event?.title}</div>
        <h3>Date and Time</h3>
        <div>Date: {event?.eventDate}</div>
        <div>Location: {event?.location}</div>
        <div>
          <h3>About this Event</h3>
          <div>{event?.description}</div>
        </div>
      </div>
      <div className="event-btn-container">
        {user_Id === event.userId && <EditEventModal />}
        {user_Id === event.userId && (
          <button className="delete-event-btn" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
      <div className="reviews-display">
            {user_Id && user_Id !== event?.userId && (
              <div className="add-review-modal">
                <CreateReview />
              </div>
            )}
            {/* <h3>
              {eventReviews?.length} Reviews{" "}
              {rating > 0 &&
                Array(rating)
                  .fill(
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                  )
                  .map((star, idx) => <span key={idx}>{star}</span>)}
            </h3> */}
            <AllReviews />
          </div>
    </div>
  );
};

export default SingleEvent;

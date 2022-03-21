import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleEvent, deleteSingleEvent } from "../../../store/event";
import EditEventModal from "../EditEvent";
import AllReviews from "../../Reviews/AllReviews";
import CreateReview from "../../Reviews/CreateReview/";
import "./EventDetail.css";

const SingleEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const eventId = +id;
  console.log("XXXXXXXXX", id);
  console.log("----------", eventId);

  const event = useSelector((state) => state.event[id]);
  const user_Id = useSelector((state) => state.session.user?.id);
  const reviews = useSelector((state) => state.review);
  const reviewsArr = Object.values(reviews);
  const eventReviews = reviewsArr.filter(
    (review) => review.eventId === eventId
  );

  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, [dispatch, id]);

  if (!event) {
    return null;
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSingleEvent(id)).catch(async (err) => {
      const errors = await err.json();
      // console.log('-----------------' , errors)
    });
    history.push("/");
  };

  const overallRating = (productReviews) => {
    return productReviews?.reduce(function (prevValue, review) {
      return prevValue + review.rating;
    }, 0);
  };

  let rating = Math.round(overallRating(eventReviews) / eventReviews.length);

  return (
    <div>
      <img className="blurry-image" src={event.imageUrl} alt={event.title} />
      <div className="event-details-container">
        <img
          className="event-image"
          alt={event.title}
          src={
            event.imageUrl
              ? event.imageUrl
              : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
          }
        />
        <div className="event-details">
          <h3>
            <div>{event.title}</div>
            <div>{event.eventDate}</div>
          </h3>
          <div className="event-btn-container">
            {user_Id === event.userId && <EditEventModal />}
            {user_Id === event.userId && (
              <button className="delete-event-btn" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </div>

        {/* <div>Location: {event?.location}</div> */}
        <div className="about-event">
          <h2>About this Event</h2>
          <div>{event.description}</div>
        </div>

        <div className="reviews-display">
          <h3>
            {eventReviews?.length} Reviews{" "}
            {/* {rating > 0 &&
                Array(rating)
                .fill(
                  <span>
                  <i className="fas fa-star"></i>
                  </span>
                  )
                .map((star, idx) => <span key={idx}>{star}</span>)} */}
          </h3>
          {user_Id !== event?.userId && (
            <div className="add-review-modal">
              <CreateReview />
            </div>
          )}
          <AllReviews />
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;

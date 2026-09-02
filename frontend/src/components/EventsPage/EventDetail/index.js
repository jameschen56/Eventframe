import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleEvent, deleteSingleEvent } from "../../../store/event";
import EditEventModal from "../EditEvent";
import AllReviews from "../../Reviews/AllReviews";
import CreateReview from "../../Reviews/CreateReview/";
import MyFooter from "../../Footer";
import "./EventDetail.css";

const SingleEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const eventId = +id;
  // console.log("XXXXXXXXX", id);
  // console.log("----------", eventId);

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

  // const overallRating = (eventReviews) => {
  //   return eventReviews.reduce(function (prevValue, review) {
  //     return prevValue + review.rating;
  //   }, 0);
  // };

  const ratings = [];
  for (let i = 0; i < eventReviews.length; i++) {
    ratings.push(eventReviews[i].rating);
  }
  const averageRating =
    ratings.reduce((a, b) => a + b, 0) / eventReviews.length;

  const eventDate =
    new Date(event.eventDate).toString().split(" ")[0] +
    ", " +
    new Date(event.eventDate).toString().split(" ")[1] +
    " " +
    new Date(event.eventDate).toString().split(" ")[2] +
    " " +
    new Date(event.eventDate).toString().split(" ")[3];
  const xxxxxx = new Date(event.eventDate);
  console.log("$$$$$$$$", xxxxxx);

  // const eventDate = new Date(event.eventDate).toDateString()
  // console.log('#############', eventDate)

  // const parseDateString = (dateString) => {
  //   const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  //   let newDate = new Date(dateString);
  //   return `${monthNames[newDate.getMonth()]} ${newDate.getDay()}, ${newDate.getFullYear()}`
  // }

  // let rating = Math.round(overallRating(eventReviews) / eventReviews.length);

  return (
    <div>
      <img
        className="blurry-image"
        width={1600}
        height={800}
        src={event.imageUrl}
        alt={event.title}
        onError={(e) =>
          (e.target.src =
            "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
        }
      />
      <div className="event-details-container">
        <img
          width={800}
          height={400}
          className="event-image"
          alt={event.title}
          src={event.imageUrl}
          onError={(e) =>
            (e.target.src =
              "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
          }
        />
        <div className="event-details">
          <h3>
            <div>{event.title}</div>
            <div>{(new Date(new Date((new Date(event.eventDate))).getTime() + 86400000)).toString().slice(4, 16)}</div>
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
        <div className="event-location">Location: {event.location}</div>
        <div className="about-event">
          <h2>About this Event</h2>
          <div>{event.description}</div>
        </div>

        <div className="reviews-display">
          <span className="count-reviews">{eventReviews?.length} Reviews </span>
          <span className="average-rating">
            {averageRating ? (
              <span>
                {averageRating.toFixed(2)} {<i className="far fa-star"></i>}
              </span>
            ) : (
              <span> {""}</span>
            )}
          </span>

          {user_Id !== event?.userId && user_Id && (
            <div className="add-review-modal">
              <CreateReview />
            </div>
          )}
          <AllReviews />
        </div>
      </div>
      <div className="event-footer">
        <MyFooter />
      </div>
    </div>
  );
};

export default SingleEvent;

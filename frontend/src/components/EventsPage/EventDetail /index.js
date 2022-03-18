import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleEvent, deleteSingleEvent } from "../../../store/event";
import EditEventModal from "../EditEvent";

const SingleEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const event = useSelector((state) => state.event[id]);
  const user_Id = useSelector((state) => state.session.user?.id);
  console.log('22222222222', event)

  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, [dispatch, id]);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('TTTTTTTTTT', id)
    dispatch(deleteSingleEvent(id))
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
    </div>
  );
};

export default SingleEvent;

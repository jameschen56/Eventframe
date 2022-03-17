import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleEvent, deleteSingleEvent } from "../../../store/event";

const SingleEvent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const event = useSelector((state) => state.event[id]);
  const user_Id = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, [dispatch, id]);

  async function handleDelete(e) {
    e.preventDefault();
    await dispatch(deleteSingleEvent(id));
    history.push("/");
  }

  return (
    <div className="event_detail-container">
      <div className="event">
        <div className="event-image">
          <img
            width={350}
            height={450}
            alt={event?.titl}
            src={
              event?.imageUrl
                ? event?.imageUrl
                : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
            }
          />
        </div>
        <p>{event?.title}</p>
        <p>Date: {event?.eventDate}</p>
        <p>Location: {event?.location}</p>
        <h2>About this event</h2>
        <p>{event?.description}</p>
      </div>
      <div className="event-btn-container">
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

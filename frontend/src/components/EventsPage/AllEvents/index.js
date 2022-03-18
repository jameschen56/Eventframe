import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllEvents } from "../../../store/event";
import './AllEvents.css'

const AllEvents = () => {
  const [eventList, setEventList] = useState([]);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event);
  // console.log('%%%%%%%%%%%%%%', events)
  // const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    if (events) {
      setEventList(Object.values(events));
    }
  }, [events]);

  return (
    <main className="events-main">
      <h2>Popular in United States</h2>
      <div className="events-content">
        {eventList.length &&
          eventList.map((event) => (
            <Link
              key={`single_event_link_${event?.id}`}
              to={`/events/${event?.id}`}
            >
              <div className="all-events-container">
                <div className="event_images">
                  <img
                    height={250}
                    alt={event?.title}
                    src={
                      event?.imageUrl
                        ? event?.imageUrl
                        : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
                    }
                  />
                </div>
                <div className="event_title">{event?.title}</div>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
};

export default AllEvents;

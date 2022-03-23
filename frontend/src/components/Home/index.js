import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllEvents } from "../../store/event";
import MyFooter from "../Footer";
import "./Home.css";

const Home = () => {
  const [eventList, setEventList] = useState([]);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event);
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
    <>
      <img id="splash-image" src="https://images.unsplash.com/photo-1578946956088-940c3b502864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2223&q=80" alt=""></img>
      <div className='adsBanner'>
            <h1>Re-open confidently with Eventframe’s COVID-19 Safety Playbook</h1>
            <p>We do not partnered with risk management and health experts to empower event creators to thoughtfully consider potential safety and security risks at your event. </p>
      </div>
      <div>
        <div className="events-main">
          <div className="popular-logo">
            <h1>Popular in <span>United States</span></h1>
          </div>
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
        </div>
        <MyFooter />
      </div>
    </>
  );
};

export default Home;

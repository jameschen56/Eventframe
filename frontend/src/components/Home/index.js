import { useState, useEffect } from "react";
import { FaBorderNone } from "react-icons/fa";
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

  const getEventsByCategoryId = (categoryId) => {
    if(categoryId === 0) {
        dispatch(getAllEvents());
    } else {
        return (
          <div>None</div>
        )
    }
    window.scroll({
        top:625,
        left:0,
        behavior: 'smooth'
    });
  }

  return (
    <>
      <img
        id="splash-image"
        src="https://images.unsplash.com/photo-1578946956088-940c3b502864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2223&q=80"
        alt=""
      ></img>
      <div className="advertisement-banner">
        <h1>Re-open confidently with Eventframe’s COVID-19 Safety Playbook</h1>
        <p>
          We do not partnered with risk management and health experts to empower
          event creators to thoughtfully consider potential safety and security
          risks at your event.{" "}
        </p>
      </div>
      <div>
        <div className="events-main">
          <div className="popular-logo">
            <h1>
              Popular in <span>United States</span>
            </h1>
            <div className="categoryMenu">
              <button className='categoryMenu_btn' onClick={() => {getEventsByCategoryId(0)}} style={{cursor: 'pointer'}}> All Events</button>
              <button className='categoryMenu_btn' onClick={() => {getEventsByCategoryId(4)}} style={{cursor: 'pointer'}}> Online </button>
              <button className='categoryMenu_btn' onClick={() => {getEventsByCategoryId(2)}} style={{cursor: 'pointer'}}> Free </button>
              <button className='categoryMenu_btn' onClick={() => {getEventsByCategoryId(1)}} style={{cursor: 'pointer'}}> Food & Drink </button>
              <button className='categoryMenu_btn' onClick={() => {getEventsByCategoryId(7)}} style={{cursor: 'pointer'}}> Music </button>
            </div>
          </div>
          <div className="events-content">
            {eventList.length &&
              eventList.map((event) => (
                <Link
                  key={`single_event_link_${event?.id}`}
                  to={`/events/${event?.id}`}
                  style={{textDecoration: 'none'}} 
                >
                  {/* <div className="all-events-container"> */}
                    <div className="event_images">
                      <img
                        height={250}
                        alt={event?.title}
                        src={event?.imageUrl}
                        className="event_image"
                        onError={(e) =>
                          (e.target.src =
                            "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png")
                        }
                      />
                      <div className="event_title" >{event?.title}</div>
                    </div>
                  {/* </div> */}
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

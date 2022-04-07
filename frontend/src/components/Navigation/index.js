import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import { useHistory } from "react-router-dom";
import { searchEvents } from "../../store/event";
import logo from "../../assets/logo.png";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch()

  const toCreateEvent = () => {
    history.push("/create-event")
  }

  const toLogin = () => {
    history.push("/login");
  };

  const toSignup = () => {
    history.push("/signup");
  };

  const toHomepage = () => {
    history.push("/");
  };

  const startSearch = () => {
    const searchbar = document.querySelector('.events_search')
    dispatch(searchEvents(searchbar.value));
    console.log('**************', dispatch(searchEvents(searchbar.value)))
    window.scroll({
      top:625,
      left:0,
      behavior: 'smooth'
  });
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <button className='navbar_btn_create_event' onClick={toCreateEvent}> Create an event </button>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
          <button className="navbar_btn_login" onClick={toLogin}>
            {" "}
            Log In{" "}
          </button>
          <button className="navbar_btn_signup" onClick={toSignup}>
            {" "}
            Sign Up{" "}
          </button>

      </>
    );
  }

  return (
    <div className="navbar">
      <div className="nav_content">
        <div className="navbar_left">
          <img className="navbar_logo" onClick={toHomepage} src={logo} alt="" />
          <div className="search_bar">
            <input
              className="events_search"
              type="search"
              placeholder="Search events"
            />
            <img
              className="magnifier"
              style={{ cursor: "pointer" }}
              onClick={startSearch}
              alt=""
              src="../images/search.png"
            ></img>
          </div>
        </div>
        <div className="navbar_right">
          <div className="navbar_btn">{isLoaded && sessionLinks}</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

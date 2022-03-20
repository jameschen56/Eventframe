import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const toHomepage = () => {
    history.push("/");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink id="create-event" to="/create-event">
          <i className="fas fa-plus"></i>Create Event
        </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navbar">
      <div className="nav_content">
        <div className="navbar_left">
            <img className='navbar_logo' onClick={toHomepage} src={logo} alt='' style={{cursor: 'pointer'}}/>
          <div className="search_bar">
            <input
              className="events_search"
              type="search"
              placeholder="Search events"
            />
            <img
              className="magnifier"
              style={{ cursor: "pointer" }}
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

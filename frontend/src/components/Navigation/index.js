import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { useHistory } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const toHomepage = () => {
    history.push('/');
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink id="create-event" to="/create-event">
          <i className="fas fa-plus"></i>Create Event
        </NavLink>
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
    <div className='navbar'>
      <div className='nav_content'>
        <div className='navbar_left'>
          <h1 onClick={toHomepage} style={{cursor: 'pointer'}} >eventframe</h1>
        </div>
        <div className='navbar_right'>
          <div className='navbar_btn'>
            {sessionLinks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

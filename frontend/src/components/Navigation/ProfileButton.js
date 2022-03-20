import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false)
  }

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="menu" onClick={openMenu}>
        <i className="fas fa-bars"></i>
        <i className="fas fa-user-circle"></i>
      </button>
      {showMenu && (
        <ul className="dropdownList" onMouseLeave={closeMenu}>
          <li className="to_username">{user.username}</li>
          <li className="to_logout">
            <button className="logout_btn" onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;

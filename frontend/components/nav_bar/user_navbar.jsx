import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';

const UserNavBar = ({ logout }) => (
    <header className="nav-user-container">
      <div className="logo-search-container">
        <li><Link to="/index"><img className="logo" src={window.images.pink_logo} /></Link></li>
        <li><SearchBar /></li>
      </div>
        <ul className="user-links-container">
          <Link to="/bookings/index"><li><button className="index-session-btn">Trips</button></li></Link>
          <li><button className="index-session-btn"
            onClick={logout}>Logout</button></li>
        </ul>
      </header>
);

export default UserNavBar;


// <li><button className="index-session-btn">UserPhoto</button></li>

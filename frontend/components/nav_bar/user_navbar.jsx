import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';
import FilterForm from './filter_form';

const UserNavBar = ({ logout, location }) => {
  return(
    <div>
      <header className="nav-user-container">
        <div className="logo-search-container">
          <li><Link to="/index"><img className="logo" src={window.images.pink_logo} /></Link></li>
          <li><SearchBar /></li>
        </div>
          <ul className="user-links-container">
          <a className="github-a-tag" href="https://github.com/Carly-Schaaf" target="_blank"><img className="github-logo" src={window.images.github_icon} /></a>
            <Link to="/bookings/index"><li><button className="index-session-btn">Trips</button></li></Link>
            <li><button className="index-session-btn"
              onClick={logout}>Logout</button></li>
          </ul>
        </header>
    </div>
);};

export default UserNavBar;

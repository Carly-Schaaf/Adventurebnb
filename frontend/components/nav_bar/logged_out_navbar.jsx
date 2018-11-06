import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';

const LoggedOutNavBar = ({ openModal }) => (
    <header className="nav-user-container">
      <div className="logo-search-container">
        <Link to="/index"><img className="logo" src={window.images.pink_logo} /></Link>
        <SearchBar />
      </div>
        <nav className="nav-session-links-container">
          <button className="index-session-btn" onClick={() =>
              openModal("login")}>Log in</button>
          <button className="index-session-btn" onClick={() =>
            openModal("signup")}>Sign up</button>
        </nav>
      </header>
);

export default LoggedOutNavBar;

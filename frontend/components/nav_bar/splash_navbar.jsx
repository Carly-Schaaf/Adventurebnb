import React from 'react';
import { Link } from 'react-router-dom';
import MasterIndexContainer from '../listing_index/master_index_container';
import SearchBox from '../search/search_box';

const SplashNavBar = ({ openModal }) => (
  <div>
    <div className="splash-background">
      <header className="nav-splash-container">
        <Link to="/index"><img className="logo" src={window.images.logo} /></Link>
        <nav className="nav-session-links-container">
          <button className="session-btn" onClick={() =>
              openModal("login")}>Log in</button>
            <button className="session-btn" onClick={() =>
                openModal("signup")}>Sign up</button>
          </nav>
        </header>
        <div>
          <SearchBox />
        </div>
      </div>
    <MasterIndexContainer />
  </div>
);

export default SplashNavBar;

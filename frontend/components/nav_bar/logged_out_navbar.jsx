import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';
import FilterForm from './filter_form';

const LoggedOutNavBar = ({ openModal, location, changeFilter, guests }) => {
    return(
      <div className="nav-filter-container">
        <header className="nav-user-container">
          <div className="logo-search-container">
            <Link to="/index"><img className="logo" src={window.images.pink_logo} /></Link>
            <SearchBar />
          </div>
            <nav className="nav-session-links-container">
            <a className="github-a-tag" href="https://github.com/Carly-Schaaf" target="_blank"><img className="github-logo" src={window.images.github_icon} /></a>
              <button className="index-session-btn" onClick={() =>
                  openModal("login")}>Log in</button>
              <button className="index-session-btn" onClick={() =>
                openModal("signup")}>Sign up</button>
            </nav>
          </header>
        </div>
      );};


export default LoggedOutNavBar;

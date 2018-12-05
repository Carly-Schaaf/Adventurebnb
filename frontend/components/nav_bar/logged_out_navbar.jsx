import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';
import FilterForm from './filter_form';

const LoggedOutNavBar = ({ openModal, location, changeFilter, guests }) => {
    let renderFilters;
    if (location.pathname === '/index' ||
    location.search !== '') {
      renderFilters = <FilterForm openModal={openModal}
        changeFilter={changeFilter} guests={guests} />;
    }
    return(
      <div className="nav-filter-container">
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
          {renderFilters}
        </div>
      );};


export default LoggedOutNavBar;

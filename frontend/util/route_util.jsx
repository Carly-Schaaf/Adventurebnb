import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import LoggedOutNavBarContainer from '../components/nav_bar/logged_out_navbar_container';
import SplashNavBarContainer from '../components/nav_bar/splash_navbar_container';


const NavBarAuth = ({component: Component, path, loggedIn, exact, history}) => {
  return(
  <Route path={path} exact={exact} render={(props) => {
      if (loggedIn)  {
        return <Component {...props} />;
      } else if (history.location.pathname !== '/') {
        return <LoggedOutNavBarContainer />;
      } else {
        return <SplashNavBarContainer />;
      }
    }
  }/>);
};

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

export const NavAuthRoute = withRouter(connect(mapStateToProps, null)(NavBarAuth));

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import { withAuth0 } from "@auth0/auth0-react";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleLogin = () => {
    const { loginWithRedirect } = this.props.auth0;
    loginWithRedirect();
  };

  handleLogout = () => {
    const { logout } = this.props.auth0;
    logout({ returnTo: window.location.origin });
  };

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              {user?.picture ? (
                <div className="nav-profile">
                  <img src={user.picture} alt={user?.name} className="profile-img" onClick={this.handleLogout} />
                  <img src={logo} alt="Beach Resort" />
                </div>
              ) : (
                <img src={logo} alt="Beach Resort" />
              )}
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/" onClick={this.handleToggle}>Home</Link>
            </li>
            <li>
              <Link to="/rooms" onClick={this.handleToggle}>Rooms</Link>
            </li>
            <li>
              {isAuthenticated ? (
                <Link to="/profile" onClick={this.handleToggle}>{user?.name}</Link>
              ) : (
                <Link onClick={this.handleLogin}>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// Wrap the class component with the withAuth0 HOC
export default withAuth0(Navbar);
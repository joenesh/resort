import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    isAuthenticated ? (
      <>
        <Hero hero="defaultHero">
            <Banner title={user?.name} subtitle="Welcome back">
            <Link to="/" className="btn-primary">
                return home
            </Link>
            </Banner>
        </Hero>

        <section className="room-extras">
            <h6>Profile</h6>
            <ul>
                {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]} </li>)}
            </ul>
        </section>
      </>
    ) : (
      <Hero hero="errorHero">
        <Banner title="No User" subtitle="Please login to continue">
          <button onClick={() => loginWithRedirect()} className="btn-primary">
            Login
          </button>
        </Banner>
      </Hero>
    )
  );
};

export default Profile;
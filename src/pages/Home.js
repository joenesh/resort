import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  
  return (
    isAuthenticated ? (
      <>
        <Hero hero="defaultHero">
          <Banner
            title={user?.name}
            subtitle="Rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </>
    ) : (
      <>
        <Hero hero="defaultHero">
          <Banner
            title="Joe Hotel"
            subtitle="Rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </>
    )
  );
};

export default Home;

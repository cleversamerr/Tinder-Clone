import React from "react";
import Header from "../../components/header";
import { Person } from "@mui/icons-material";
import TinderCards from "../../components/tinder-cards";
import SwipeButtons from "../../components/swipe-buttons";

import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <Header Icon={Person} path="/" />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default Home;

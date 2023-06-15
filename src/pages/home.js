import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/hero";
import RecentWork from "../components/projects/recentwork";

const Home = () => {
  return (
    <div className="App fade-in">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Abhishek Tripathi | Frontend Developer</title>
        <link rel="canonical" href="http://harshbadhai.me/" />
      </Helmet>
      <Hero />
      <RecentWork />
    </div>
  );
};

export default Home;

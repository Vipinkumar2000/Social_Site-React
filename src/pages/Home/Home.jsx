import React from "react";
import "./home.css";
import { Topbar, Sidebar, Feed, Rightbar } from "../../components/index.js";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "../Assests/player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Player;

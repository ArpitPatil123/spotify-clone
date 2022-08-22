import React from "react";
import { loginUrl } from "../API/spotify";
import "../Assests/login.css";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://www.kcrw.com/events/left-right-center-live-2018-archived/img/listen-on-spotify-white.png"
        alt="logo"
      />
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
};

export default Login;

import React from "react";
import "../Assests/footer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ReplayIcon from "@mui/icons-material/Replay";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img src="" alt="" className="footerAlbumLogo" />
        <h4>Yeah!</h4>
        <p>Usher</p>
      </div>
      <div className="footer_center">
        <ShuffleIcon style={{ color: "#1ed15e" }} className="footer_icon" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <ReplayIcon style={{ color: "#1ed15e" }} className="footer_icon" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "../Assests/songRow.css";

const SongRow = ({ track }) => {
  return (
    <div className="song_row">
      <img className="song_row_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;

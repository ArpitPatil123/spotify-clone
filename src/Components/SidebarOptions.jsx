import React from "react";
import "../Assests/sidebarOptions.css";
import { useDataLayerValue } from "../ContextApi/Datalayer";

const SidebarOptions = ({ title, Icon, id, spotify }) => {
  const [{}, dispatch] = useDataLayerValue();

  function handleClick(playlistId) {
    dispatch({
      type: "SET_PLAYLIST_ID",
      playlistId: playlistId,
    });

    spotify.getPlaylist(playlistId).then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
      // console.log(response)
    });
  }
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOptions_icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p
          onClick={() => {
            handleClick(id);
          }}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default SidebarOptions;

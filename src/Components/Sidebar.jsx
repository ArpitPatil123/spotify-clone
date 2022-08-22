import React from "react";
import "../Assests/sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../ContextApi/Datalayer";

const Sidebar = ({ spotify }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title">Playlists</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOptions
          title={playlist.name}
          id={playlist.id}
          spotify={spotify}
        />
      ))}
    </div>
  );
};

export default Sidebar;

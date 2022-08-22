import React from "react";
import "../Assests/header.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from "../ContextApi/Datalayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input type="text" placeholder="Search for artists" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;

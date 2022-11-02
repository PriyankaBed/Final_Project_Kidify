import React, { useState, useEffect } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function Sidebar({ user, logout }) {
   const [playlists, setPlaylists] = useState();

    useEffect(() => { 
          axios
          .get(`http://localhost:4000/users/profile/playlists`, {
            withCredentials: true
          })
          .then((response) => {
            console.log(response.data);
            setPlaylists(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  return (
    <>
      {user ? (
        <>
          <div
            style={{
              display: "flex",
              height: "auto",
              overflow: "scroll initial",
            }}
          >
            <CDBSidebar textColor="#fff" backgroundColor="#333" margin="10px">
              <CDBSidebarHeader>
                <h4>Hello, {user.first_name} </h4>
              </CDBSidebarHeader>
              <CDBSidebarContent className="sidebar-content">
                <NavLink
                  to="/profile/create-playlist"
                  activeclassname="activeClicked"
                >
                  <CDBSidebarMenuItem textFontSize="18px">
                    Create new Playlist
                  </CDBSidebarMenuItem>
                </NavLink>
                <CDBSidebarMenu>
                  <p className="playlists-title">My Playlists</p>
                  {playlists ? (playlists.map((listItem) => {
                    return(
                    <NavLink to={`/profile/${listItem._id}`} activeclassname="activeClicked">
                    <CDBSidebarMenuItem textFontSize="18px" className="ps-5">
                      {listItem.name}
                    </CDBSidebarMenuItem>
                  </NavLink>
                  )
                  })):(<div>No playlist</div>)}
                  
                  <NavLink to="/:id_playlist" activeclassname="activeClicked">
                    <CDBSidebarMenuItem textFontSize="18px" className="ps-5">
                      Playlist 2
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink to="/:id_playlist" activeclassname="activeClicked">
                    <CDBSidebarMenuItem textFontSize="18px" className="ps-5">
                      Playlist 3
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink to="/profile" activeclassname="activeClicked">
                    <CDBSidebarMenuItem textFontSize="18px">
                      Favorites
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    to="/"
                    activeclassname="activeClicked"
                    onClick={logout}
                  >
                    <CDBSidebarMenuItem textFontSize="18px">
                      Logout
                    </CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
            </CDBSidebar>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Sidebar;

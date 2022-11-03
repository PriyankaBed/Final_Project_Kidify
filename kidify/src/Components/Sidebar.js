import React, { useState, useEffect } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, useParams } from "react-router-dom";
import axios from "../axiosClient";

function Sidebar({ user, logout }) {
   const [playlists, setPlaylists] = useState();

    useEffect(() => { 
          axios
          .get(`/users/profile/playlists`, {
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

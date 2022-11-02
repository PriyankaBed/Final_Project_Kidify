import React, { useEffect, useState } from "react";
import axios from "axios";
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact";
import { NavLink } from "react-router-dom";
import VideoItem from "./VideoItem";

function Profile({ data, setUser }) {
    const [userInfo, setUserInfo] = useState({});
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/users/profile`, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                setUserInfo(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(`http://localhost:4000/users/profile/favorites`, {
                withCredentials: true,
            })
            .then((response) => {
                setFavorites(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const logout = () => {
        axios
            .get(`http://localhost:4000/auth/logout`, {
                withCredentials: true,
            })
            .then((response) => {
                setUserInfo(null);
                setUser(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='profile'>
            <div className='profile-sidebar'>
                <div
                    style={{
                        display: "flex",
                        height: "100%",
                        overflow: "scroll initial",
                    }}
                >
                    <CDBSidebar textColor='#fff' backgroundColor='#333' margin='10px'>
                        <CDBSidebarHeader>
                            <h4>Hello, {userInfo.first_name} </h4>
                        </CDBSidebarHeader>
                        <CDBSidebarContent className='sidebar-content'>
                            <CDBSidebarMenu>
                                <NavLink to='/create_playlist' activeclassname='activeClicked'>
                                    <CDBSidebarMenuItem textFontSize='18px'>Create new playlist +</CDBSidebarMenuItem>
                                </NavLink>
                                <p className='playlists-title'>My Playlists</p>
                                <NavLink to='/:id_playlist' activeclassname='activeClicked'>
                                    <CDBSidebarMenuItem textFontSize='18px' className='ps-5'>
                                        Playlist 1
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to='/:id_playlist' activeclassname='activeClicked'>
                                    <CDBSidebarMenuItem textFontSize='18px' className='ps-5'>
                                        Playlist 2
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to='/:id_playlist' activeclassname='activeClicked'>
                                    <CDBSidebarMenuItem textFontSize='18px' className='ps-5'>
                                        Playlist 3
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to='/profile' activeclassname='activeClicked'>
                                    <CDBSidebarMenuItem textFontSize='18px'>Favorites</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to='/' activeclassname='activeClicked' onClick={logout}>
                                    <CDBSidebarMenuItem textFontSize='18px'>Logout</CDBSidebarMenuItem>
                                </NavLink>
                            </CDBSidebarMenu>
                        </CDBSidebarContent>
                    </CDBSidebar>
                </div>
            </div>
            <div className='profile-right-column'>
                <div className='profile-title'>
                    <h1 style={{ fontFamily: "cursive", padding: "25px" }}>My Favorites</h1>

                    <div className='profile-video-cards'>
                        {favorites.length > 0 ? (
                            favorites.map((favorite, index) => {
                                return (
                                    <div key={index} className='card-container-profile'>
                                        <VideoItem video={favorite} />
                                    </div>
                                );
                            })
                        ) : (
                            <div> Your list is empty. Start adding your favorite videos.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

{
    /* <div className='video-cards'>
{data
    .filter((item) => item.category === "6-7")
    .map((item) => {
        return (
            <div className='card-container-67 card-container'>
                <div>
                    <VideoItem video={item} />
                </div>
            </div>
        );
    })}
</div> */
}

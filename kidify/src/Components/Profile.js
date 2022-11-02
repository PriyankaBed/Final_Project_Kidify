import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";
import Sidebar from "./Sidebar";

function Profile({ user, setUser }) {
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
        <div className="profile">
        <div className="profile-mainpage">
          <Sidebar user={userInfo} logout={logout}/>
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
      </div>
    );
}

export default Profile;
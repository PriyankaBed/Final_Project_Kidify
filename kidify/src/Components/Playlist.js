import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import { useParams } from "react-router-dom";
import axios from "../axiosClient";

function Playlist({user}) {

  const { playlist_id } = useParams();
  const [playlistInfo, setPlaylistInfo] = useState();

    useEffect(() => { 
          axios
          .get(`/users/profile/${playlist_id}`, {
            withCredentials: true
          })
          .then((response) => {
            console.log(response.data);
            setPlaylistInfo(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [playlist_id]);

  return (
    <div>
      <h4>{playlistInfo.name}</h4>
        {playlistInfo &&
          playlistInfo.videos.map((item, index) => {
            return <div key={index} className="card-container"><VideoItem video={item} /></div>;
          })
        }
    </div>
  );
}

export default Playlist;
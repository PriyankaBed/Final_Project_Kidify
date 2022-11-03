import axios from "../axiosClient";
import { CDBBtn } from "cdbreact";
import React, { useState } from "react";
import Favorite from "../Images/favorite.png";
import FavoriteImage from "../Images/favorite-pressed.png";

function FavoriteButton({ user, userFrom, videoId, videoInfo }) {
  const [favorite, setFavorite] = useState(user?.favorites.includes(videoId));

  const variable = {
    videoId: videoId,
    videoTitle: videoInfo.title,
    videoArtist: videoInfo.artist,
    video_url_id: videoInfo.video_url_id,
    video_img_url: videoInfo.video_img_url,
    short_description: videoInfo.short_description,
    category: videoInfo.category,
    userFrom: userFrom,
  };
  console.log(user?.favorites.includes(videoId));

  const onClickFavorite = () => {
    if (favorite) {
      axios
        .put(`/users/profile/favorites/removeFromFavorites`, variable, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data) {
            setFavorite(!favorite);
          } else {
            alert("Failed to remove from favorites");
          }
        });
    } else {
      axios
        .put(`/users/profile/favorites/addToFavorites`, variable, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data) {
            setFavorite(!favorite);
          } else {
            alert("Failed to add to favorites");
          }
        });
    }
  };

  return (
    <div>
      <CDBBtn className="favorite-button" onClick={onClickFavorite}>
        {favorite ? (
          <img src={FavoriteImage} alt="favorited" />
        ) : (
          <img src={Favorite} alt="notfavorite" />
        )}
      </CDBBtn>
    </div>
  );
}

export default FavoriteButton;

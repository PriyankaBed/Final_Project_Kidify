import React from "react";
import VideoItem from "./VideoItem";

function FavoritesList({ user }) {
    return (
        <div>
            {user.favorites.length > 0 ? (
                user.favorites.map((favorite, index) => {
                    return (
                        <div key={index} className='card-container'>
                            <VideoItem video={favorite} />
                        </div>
                    );
                })
            ) : (
                <div>Your list is empty. Start adding your favorite videos.</div>
            )}
        </div>
    );
}

export default FavoritesList;



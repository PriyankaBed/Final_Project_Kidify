import React from "react";
import { useNavigate } from "react-router-dom";

function VideoItem({ video }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(`/player/${video._id}`);
    };

    return (
        <div onClick={handleClick} key={video.title} className='video-item-clickable'>
            <img src={video.video_img_url} alt={video.title} />
            <div className='card-body'>
                <h4>{video.title}</h4>
            </div>
        </div>
    );
}

export default VideoItem;

import React from "react";

const VideoDetail = ({ video: { id: { videoId }, snippet: { title, description } } }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title={title} src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;
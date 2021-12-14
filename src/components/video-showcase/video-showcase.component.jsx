import React from "react";
import "./video-showcase.styles.scss";
import Video from "./assets/temp-video.mp4";
import ReactPlayer from "react-player";

const VideoShowcase = () => (
  <div className="video-showcase-container">
    <ReactPlayer
      className="video"
      width="100%"
      height="100%"
      url="https://vimeo.com/302168664"
      controls={false}
      muted={true}
      autoplay={true}
      playing={true}
      loop={true}
    />
  </div>
);

export default VideoShowcase;

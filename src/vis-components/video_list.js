import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => { // Make Sure while calling this or defining in the App.js Assign a property to the variable
  const videoItems = props.videos.map((video) => {
    return(
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key = {video.etag}
      video={video} />
    );

  });
  return(
    <ul className =" col-md-4 list-group">
    {videoItems}
    </ul>
  );
};
export default VideoList;

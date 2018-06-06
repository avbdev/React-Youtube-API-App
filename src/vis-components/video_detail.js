import React from 'react';

const VideoDetail = ({video}) => {
if(!video){
    return <div> Loading...</div>;
}

const videoId = video.id.videoId;
const url = 'https://youtube.com/embed/' + videoId + '?autoplay=1';

return(

    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe title={videoId} className="embed-responsive-item" src={url} allow="autoplay" allowFullScreen></iframe>
    </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>

    </div>
);

};

export default VideoDetail;

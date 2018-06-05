import React from 'react';

const VideoListItem = ({video}) => { {/*The prop can also be directly the property like {video} can be used isnstead for props.*/}
    
    const imageURL = video.snippet.thumbnails.default.url;
    const imageTitle = video.snippet.title;
    return( 
        <li className = "list-group-item">
            <div className ="video-list media">
                <div className="media-left">
                    <img className ="media-object" src={imageURL} /> 
                </div>
    
                <div className="media-body">
                    <div className="media-heading"> {imageTitle} </div>
                </div>
            </div> 
        </li>
    );
};
export default VideoListItem;
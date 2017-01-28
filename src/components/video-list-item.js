import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video; at the top ( props )
    const imageUtl = video.snippet.thumbnails.default.url;

    return (
      // onclick sets selectedVideo state with chosen video
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUtl} alt=""/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;

import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    // onVideoSelect goes down to the video-list-item
    const videoItems = props.vide.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;

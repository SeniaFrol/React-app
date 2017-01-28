import React from 'react';

const VideoDetail = ({video}) => {
    // const video = props.video; as u can realise at the top same with this comment

    if (!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log(video);


    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
                <div className="channel-title">{video.snippet.channelTitle}</div>
            </div>
        </div>
    );
};


export default VideoDetail;

import React from 'react';
import { Link } from 'react-router-dom';
import millify from "millify";

const VideoCard = ({ video }) => {
    return (
        <Link to={`/watch/${video.video.videoId}`} className='text-decoration-none'>
            <div className='text-light '>
                <div>
                    <img className='rounded img-fluid' src={video.video.thumbnails[0].url} alt='pic' />
                </div>
                <div className='d-flex gap-2 p-2'>
                    <img className="channel-img" src={video.video.author.avatar[0].url} alt="avatar" />
                    <div>
                        <pv className='fw-bold'>{video.video.title}</pv>
                        <p>{video.video.author.title}</p>
                        <div className='d-flex gap-3'>
                            <p>{millify(video.video.stats.views)}</p>
                            <p>{video.video.publishedTimeText}</p>
                        </div>

                    </div>
                </div>
            </div>
        </Link>


    )
}

export default VideoCard;

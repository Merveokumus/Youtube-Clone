import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api';
import ReactPlayer from "react-player/youtube";
import loading from "../assets/loading.gif"
import VideoCard from './VideoCard';


const VideoDetail = () => {
    //url den parametre alma
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        fetchVideoDetails();
        fetchRelatedVideos();
    }, []);

    const fetchVideoDetails = () => {
        fetchDataFromApi(`video/details/?id=${videoId}`)
            .then((res) => setVideo(res));
    };

    //önerilen videoları çekmek için bir fonk yazalım
    const fetchRelatedVideos = () => {
        fetchDataFromApi(`video/related-contents/?id=${videoId}`)
            .then((res) => {
                setRelatedVideos(res.contents);
            });
    };

    return (

        <div
            style={{ minHeight: '100vh' }}
            className='d-flex bg-dark text-light p-3 gap-2 p-3'>
            {/*eğer video yüklenmemişse */}
            {!video && (<img
                className='loading'
                src={loading}
                alt='loading' />)}
            {/* apiden cevap gelirse */}
            {video && (
                <>
                    <div className='flex-grow-1 '>
                        <ReactPlayer
                            controls
                            playing={true}
                            width="100%"
                            height="70vh"
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                        />
                        <div >
                            <h3>{video.title}</h3>
                            <div className='d-flex gap-5'>
                                <img src={video.author.avatar[0].url} alt='avatar' />
                                <p>
                                    {video.author.title}
                                </p>
                                <p>{video.author.stats.subscribersText}</p>
                                <p>Beğeni:{video.stats.likes}</p>
                                <p>İzlenme:{video.stats.views}</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        {relatedVideos.map((video) => {
                            if (video.type !== 'video') return;

                            return <VideoCard video={video} />;
                        })}
                    </div>
                </>
            )}
        </div>
    );
};
export default VideoDetail;

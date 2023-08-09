
import LeftNavbar from './LeftNavbar';
import { useContext } from 'react';
import { Context } from './../context/contextApi';
import VideoCard from './VideoCard';

const Feed = () => {
    //context içindeki videoları çekme
    const { searchResult } = useContext(Context);
    return (
        <div className='d-flex bg-dark'
            style={{ minHeight: '100vh' }}>
            <LeftNavbar />
            <div className='w-100 p-4 videos'>
                {searchResult.map((video, index) => {
                    if (video.type !== 'video') return;
                    return <VideoCard key={index} video={video} />;
                })}
            </div>
        </div>
    );
};

export default Feed;

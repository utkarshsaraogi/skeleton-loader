import React from 'react';

import BlogSkeleton from '../components/BlogSkeleton';
import ProfileSkeleton from '../components/ProfileSkeleton';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__profile'>
                <h1 className='home-label'>Profile</h1>
                {<ProfileSkeleton />}
            </div>
            <div className='home__feed'>
                <h1 className='home-label'>Blogs</h1>
                {Array(6).fill().map((n) => <BlogSkeleton key={n} />)}
            </div>
        </div>
    )
};

export default Home;
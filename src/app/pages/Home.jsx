import React from 'react';

import BlogSkeleton from '../components/BlogSkeleton';
import ProfileSkeleton from '../components/ProfileSkeleton';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__profile'>
                <h1 className='home-label'>Profile</h1>
                {[1].map((n) => <ProfileSkeleton key={n} />)}
            </div>
            <div className='home__feed'>
                <h1 className='home-label'>Blogs</h1>
                {[1,2,3,4,5].map((n) => <BlogSkeleton key={n} />)}
            </div>
        </div>
    )
};

export default Home;
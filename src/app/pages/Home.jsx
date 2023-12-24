import React, { useState, useEffect } from 'react';

import BlogSkeleton from '../components/BlogSkeleton';
import ProfileSkeleton from '../components/ProfileSkeleton';
import Profile from '../components/Profile';
import Blog from '../components/Blog';

import { getProfileData, getBlogPosts } from '../../cruds';

const Home = () => {
    const [profile, setProfile] = useState();
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        const fetchProfile = async () => {
            const { data } = await getProfileData();
            setProfile(data);
        };

        const fetchBlogs = async () => {
            const { data } = await getBlogPosts();
            setBlogs(data);
        };

        fetchProfile();
        fetchBlogs();
    }, []);

    return (
        <div className='home'>
            <div className='home__profile'>
                <h1 className='home-label'>Profile</h1>
                {!profile ? <ProfileSkeleton /> : <Profile data={profile} />}
            </div>
            <div className='home__feed'>
                <h1 className='home-label'>Blogs</h1>
                {!blogs ?
                    Array(6).fill().map((n, idx) => <BlogSkeleton key={`blog-id-${idx}`} />) :
                    blogs?.map((data, idx) => <Blog key={`blog-id-${idx}`} data={data} />)
                }
            </div>
        </div>
    )
};

export default Home;
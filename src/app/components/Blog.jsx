import React from 'react';

const Blog = ({ data }) => {
    return (
        <div className='blog'>
            <img className='blog-thumbnail' src={data?.thumbnail} alt='' />
            <div className='blog__content'>
                <p className='blog-title'>{data?.title}</p>
                <p className='blog-description'>{data?.description}</p>
            </div>
        </div>
    )
};

export default Blog;
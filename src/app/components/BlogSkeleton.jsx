import React from 'react';

import Shimmer from './Shimmer';
import Skeleton from './Skeleton';

const BlogSkeleton = () => {
    return (
        <div className='skeletonWrapper'>
            <div className='blog'>
                <Skeleton type='thumbnail' />
                <div className='blog__content'>
                    <Skeleton type='title' />
                    <Skeleton type='text' />
                    <Skeleton type='text' />
                    <Skeleton type='text' />
                </div>
            </div>
            <Shimmer />
        </div>
    )
};

export default BlogSkeleton;
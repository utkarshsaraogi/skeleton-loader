import React from 'react'
import Shimmer from './Shimmer'
import Skeleton from './Skeleton'

const ProfileSkeleton = () => {
    return (
        <div className='skeletonWrapper'>
            <div className='skeletonProfile'>
                <div>
                    <Skeleton type='avatar' />
                </div>
                <div>
                    <Skeleton type='title' />
                    <Skeleton type='text' />
                    <Skeleton type='text' />
                </div>
            </div>
            <Shimmer />
        </div>
    )
}

export default ProfileSkeleton;
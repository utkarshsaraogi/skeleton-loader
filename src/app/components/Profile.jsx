import React from 'react';

const Profile = ({ data }) => {
    return (
        <div className='profile'>
            <img className='profile-avatar' src={data?.avatar} alt='' />
            <div className='profile__info'>
                <p className='profile-title'>{data?.name}</p>
                <p className='profile-description'>{data?.description}</p>
            </div>
        </div>
    )
};

export default Profile;
import React from 'react';

const Skeleton = ({ type }) => {
    return (
        <div className={`skeleton skeleton--${type}`}></div>
    )
};

export default Skeleton;
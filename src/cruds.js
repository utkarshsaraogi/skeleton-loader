import { profileData, blogsData } from "./data";

export const getProfileData = () => {
    return new Promise(resolve => setTimeout(() => resolve({
        data: profileData
    }), 1500));
};

export const getBlogPosts = () => {
    return new Promise(resolve => setTimeout(() => resolve({
        data: blogsData
    }), 2500));
};

import React from 'react';
import { Navigate } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import UserProfile from '../components/profile/UserProfile';
import { useUserDetailsFetchQuery } from '../store';

const HomeUser = () => {
    const token = localStorage.getItem('token');

    // Destructure the 'data', 'isLoading', and 'isError' properties
    const { data: resultData, isLoading, isError } = useUserDetailsFetchQuery({token });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching user data.</div>;
    }

    return (
        <div>
            {resultData && resultData.message === 'approve' ? (
                <div>
                    <NavBar />
                    <UserProfile user={resultData.user}/>
                </div>
            ) : (
                <Navigate to="" />
            )}
        </div>
    );
};

export default HomeUser;

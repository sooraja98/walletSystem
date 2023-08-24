import React from 'react'
import NavBar from '../components/navbar/NavBar'
import UserProfile from '../components/profile/UserProfile'


const HomeUser = () => {
    return (
        <div className=''>
            <div>
                <NavBar/>
                <UserProfile/>
            </div>
        </div>
    )
}

export default HomeUser

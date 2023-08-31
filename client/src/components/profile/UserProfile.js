import React from 'react';

const UserProfile = ({user}) => {
    return (<div className='flex md:justify-center justify-center'>
        <div className=' bg-green-950 md:bg-green-950 md:bg-opacity-50 bg-opacity-50 mt-20 text-white md:w-1/3 w-5/6 md:justify-center md:items-center  flex justify-center'>
            <div className='px-4 py-6 flex justify-center flex-col'>
                <h1 className='text-center text-2xl text-white font-semibold mb-6'>Profile Page</h1>
                <div className='mb-4 md:w-5/6 lex justify-center'>
                    <label className='block text-sm font-medium text-white '>Username:</label>
                    <p className='mt-1 text-lg font-semibold text-white'> {
                        user.username
                    }</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-white '>Email:</label>
                    <p className='mt-1 text-lg font-semibold text-white'> {
                        user.email
                    }</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-white '>Unique ID:</label>
                    <p className='mt-1 text-lg font-semibold text-white'> {
                        user.uniqueid
                    }</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-white '>Referral ID:</label>
                    <p className='mt-1 text-lg font-semibold text-white'> {
                        user.referalid
                    }</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-white '>Amount:</label>
                    <p className='mt-1 text-lg font-semibold text-white'> {
                        user.amount
                    }</p>
                </div>
            </div>

        </div>
    </div>);
}

export default UserProfile;

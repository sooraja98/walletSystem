import React from 'react'

const UserProfile = () => {
    return (
        <>
            <h1 className='text-center text-4xl text-white mt-10'>Profile-Page</h1>
            <div className='flex justify-center items-center mt-2'>
                <div className='bg-green-950 md:bg-green-950 md:bg-opacity-50 bg-opacity-50 w-5/6 md:w-1/4 h-96'>
                    <div className=' mt-10 flex justify-center '>
                        <input className='bg-transparent border-b-2 focus:appearance-none focus:outline-none text-center text-white' value={"name"} type="text" readOnly/>
                    </div>
                    <div className=' mt-10 flex justify-center '>
                        <input className='bg-transparent border-b-2 focus:appearance-none focus:outline-none text-center text-white' value={"email"} type="email" readOnly/>
                    </div>
                    <div className=' mt-10 flex justify-center '>
                        <input className='bg-transparent border-b-2 focus:appearance-none focus:outline-none text-center text-white' value={"secretid"} type="text" readOnly/>
                    </div>
                    <div className=' mt-10 flex justify-center '>
                        <input className='bg-transparent border-b-2 focus:appearance-none focus:outline-none text-center text-white' value={"referalid"} type="text" readOnly/>
                    </div>
                    <div className=' mt-10 flex justify-center '>
                        <input className='bg-transparent border-b-2 focus:appearance-none focus:outline-none text-center text-white' value={"amount"} type="text" readOnly/>
                    </div>

                </div>
            </div>
        </>

    )
}

export default UserProfile

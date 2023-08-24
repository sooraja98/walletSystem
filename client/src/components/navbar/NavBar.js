import React, {useState} from 'react';
import {Link} from 'react-router-dom'
const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <nav className='bg-transparent text-white p-4'>
                <div className='flex justify-between'>
                    <div className='text-white text-3xl items-center justify-center p-4'>
                        <Link to="/userhome">LOGO</Link>
                    </div>
                    <div className='hidden md:flex gap-4 p-4'>
                        <div className='hover:border-b-2'>
                            <Link to="/userhome">Home</Link>
                        </div>
                        <div className='hover:border-b-2'>
                            <Link to="/userProfile">Transaction history</Link>
                        </div>
                        <div className='hover:border-b-2'>
                            <Link to="/buy">BUY</Link>
                        </div>
                        <div className='hover:border-b-2'>
                            <Link to="/send">SEND</Link>
                        </div>
                        <div className='hover:border-b-2'>
                            <Link to="/logout">LOGOUT</Link>
                        </div>
                    </div>
                    <div className='md:hidden p-4 '>
                        <button onClick={toggleMobileMenu}>
                            <svg width="30px" height="30px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white">
                                <path d="M64 192h896v76.8H64V192z m0 281.6h896v76.8H64V473.6z m0 281.6h896V832H64v-76.8z"/>
                            </svg>


                        </button>
                    </div>
                </div>
            </nav>
            <div className='flex justify-center'>
                {
                mobileMenuOpen && (
                    <div className='md:hidden w-32 text-white text-center  shadow-2xl  justify-end'>
                        <div className='border-b-2  hover:bg-gray-500   rounded-sm p-1'>
                            <Link to="/userhome">Home</Link>
                        </div>
                        <div className='border-b-2   hover:bg-gray-500   rounded-sm p-1'>
                            <Link to="/userProfile">TRANSCATION HISTORY</Link>
                        </div>
                        <div className='border-b-2 hover:bg-gray-500   rounded-sm p-1 '>
                            <Link to="/buy">BUY</Link>
                        </div>
                        <div className='border-b-2 hover:bg-gray-500 rounded-sm p-1'>
                            <Link to="/send">SEND</Link>
                        </div>
                        <div className='border-b-2 hover:bg-gray-500 rounded-sm p-1'>
                            <Link to="/logout">LOGOUT</Link>
                        </div>
                    </div>
                )
            } </div>
        </>

    );
};

export default NavBar;

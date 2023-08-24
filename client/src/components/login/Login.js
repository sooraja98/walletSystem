import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Login = ({user}) => {
    const navigate = useNavigate()
    const handleonsubmit = () => {
        navigate('/userhome')

    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 bg-green-950 bg-opacity-50 shadow-md rounded-md">
                <h2 className="text-2xl text-white mb-4 text-center">Login</h2>
                <form onSubmit={handleonsubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Log In
                        </button>
                    </div>
                </form>
                <div className="flex items-end justify-end mt-4">
                    <Link to={`/register`}
                        className="text-green-400 hover:text-green-600">
                        Forgetpassword
                    </Link>
                </div>
                <div className="flex items-end justify-end mt-4">
                    <Link to={`/register`}
                        className="text-green-400 hover:text-green-600">
                        New member? Register here.
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Login;

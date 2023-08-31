import React, {useEffect, useState} from 'react'
import {useRegisterUserMutation} from '../../store';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styles
import {ToastContainer} from 'react-toastify';
const Register = () => {
    const today = new Date();
    const navigate = useNavigate()
    const maxDate = `${
        today.getFullYear()
    }-${
        (today.getMonth() + 1).toString().padStart(2, '0')
    }-${
        today.getDate().toString().padStart(2, '0')
    }`;
    const minDate = `${
        today.getFullYear() - 100
    }-${
        (today.getMonth() + 1).toString().padStart(2, '0')
    }-${
        today.getDate().toString().padStart(2, '0')
    }`;
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        dob: '',
        referalid: ''
    })
    const [registerUser] = useRegisterUserMutation(); // Destructure the mutation function and its status flags

    const handleChange = (e) => {
        const {id, value} = e.target
        setFormData((formData) => ({
            ...formData,
            [id]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try { // Use the mutation function to send the registration data
            const result = await registerUser(formData);
            // You might want to redirect the user to a different page or show a success message here
            if (result.data.message === "approve") {
                toast.success('Registration successful', {
                    position: "bottom-center",
                    autoClose: 100,
                    hideProgressBar: false,
                    onClose: () => {
                        navigate('/');
                    }
                });
            } else {
                toast.error('Registration failed', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true
                });

            }

        } catch (error) {
            console.error('Registration failed:', error);
            // Handle the error (show an error message, etc.)
        }
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    return (<>
        <ToastContainer 
            
        />
        <div className="flex justify-center items-center min-h-screen">

            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 bg-green-950 bg-opacity-50 shadow-md rounded-md">
                <h2 className="text-2xl text-white mb-4 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                            Username
                        </label>
                        <input onChange={handleChange}
                            value={
                                formData.username
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                            Email
                        </label>
                        <input onChange={handleChange}
                            value={
                                formData.email
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="email"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2">
                            Password
                        </label>
                        <input onChange={handleChange}
                            value={
                                formData.password
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2">
                            Date of birth
                        </label>
                        <input onChange={handleChange}
                            value={
                                formData.dob
                            }
                            className="shadow appearance-none border rounded w-full py-4 md:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            max={maxDate}
                            min={minDate}
                            id="dob"
                            type="date"
                            placeholder='data of birth'/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                            Referal Id
                        </label>
                        <input onChange={handleChange}
                            value={
                                formData.referalid
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="referalid"
                            type="text"
                            placeholder="Referal id"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Verify
                        </button>
                    </div>

                </form>
            </div>
        </div>

    </>)
}

export default Register

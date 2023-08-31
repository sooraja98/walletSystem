import React, {useState} from 'react'
import {useUserSendingCoinByEmailMutation, useUserSendingCoinByIdMutation} from '../../store'

const Send = () => {
    const [email, setEmail] = useState(true)
    const [secret, setSecret] = useState(false)
    const token = localStorage.getItem('token');

    const handleEmail = () => {
        if (email) {
            setEmail(true)
        } else {
            setSecret(!secret)
            setEmail(!email)
        }
    }
    const handleSecret = () => {
        if (secret) {
            setSecret(true)
        } else {
            setEmail(!email)
            setSecret(!secret)
        }

    }
    const [emailformData, setEmailFormData] = useState({coin: '', email: ''})
    const handleEmailChange = (e) => {
        const {id, value} = e.target
        setEmailFormData((emailformData) => ({
            ...emailformData,
            [id]: value
        }))
    }
    const [idformData, setIdFormData] = useState({coin: '', secretid: ''})
    const handleIdChange = (e) => {
        const {id, value} = e.target
        setIdFormData((idformData) => ({
            ...idformData,
            [id]: value
        }))
    }
    const [UserSendingCoinByEmail] = useUserSendingCoinByEmailMutation()
    const [UserSendingCoinById] = useUserSendingCoinByIdMutation()

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if (emailformData.coin <= 0) {
            alert("please enter a valid amount")
        } else {
            const result = await UserSendingCoinByEmail({emailformData, token})
            console.log(result)
            if (result.data.message === 'The amount is sent') {
                alert('the amount is send')
            } else if (result.data.message === "You can't send coin to yourself") {
                alert("You cant send coin to your self")
            } else if (result.data.message === 'You need to buy coin to send') {
                alert("You need to buy coin to send")
            } else if (result.data.message === "You don't have that much of coin") {
                alert("You dont have that much of coin")
            } else if (result.data.message === 'There is no such user') {
                alert("There is no such user")
            }
        }

    }
    const handleIdSubmit = async (e) => {
        e.preventDefault();
        if (idformData.coin <= 0) {
            alert("please enter a valid amount")
        } else {
            const result = await UserSendingCoinById({idformData, token})
            console.log(result)
            if (result.data.message === 'The amount is sent') {
                alert('the amount is send')
            } else if (result.data.message === "You can't send coin to yourself") {
                alert("You cant send coin to your self")
            } else if (result.data.message === 'You need to buy coin to send') {
                alert("You need to buy coin to send")
            } else if (result.data.message === "You don't have that much of coin") {
                alert("You dont have that much of coin")
            } else if (result.data.message === 'There is no such user') {
                alert("There is no such user")
            }
        }

    }
    return (
        <div className=' flex justify-center flex-col md:flex-row md:justify-around  md:mt-36'>
            <div className='flex justify-center flex-col'>
                <div className='text-center md:text-6xl text-4xl text-white md:mb-36'>Send Your Coin Using</div>
                <div className='flex justify-around mt-10 w-full md:-mt-20'>
                    <div>
                        <button className='bg-green-800 px-8 py-2 rounded-md hover:bg-green-900 text-white'
                            onClick={handleEmail}>Email</button>
                    </div>
                    <div>
                        <button className='bg-green-800 px-4 py-2 rounded-md hover:bg-green-900 text-white'
                            onClick={handleSecret}>Secret id</button>
                    </div>
                </div>
            </div>
            {
            email && <div className=' flex justify-center mt-10 '>
                <div className='w-5/6 md:w-full lg:w-full xl:w-full p-8 bg-green-950 bg-opacity-50 shadow-md rounded-md'>
                    <h1 className='text-center p-8 text-white text-2xl'>SEND COINS BY EMAIL</h1>
                    <form className='text-center'
                        onSubmit={handleEmailSubmit}>
                        <div className='mt-4 flex justify-center items-center text-start'>
                            <input type="number" pattern="[0-9]*"
                                style={
                                    {
                                        appearance: 'textfield',
                                        hover: "appearance: 'textfield'"
                                    }
                                }
                                name="cointosend"
                                id="coin"
                                className='rounded-md  appearance-none  w-full md:px-32  py-2 text-start hover:outline-none '
                                placeholder='How much coin need to send '
                                onChange={handleEmailChange}
                                value={
                                    emailformData.coin
                                }
                                onKeyDown={
                                    (e) => {
                                        if (e.key === '-' || e.key === 'e' || parseInt(e.target.value + e.key) > 100000) {
                                            e.preventDefault();
                                        }
                                    }
                                }/>
                        </div>
                    <div className='mt-4 flex justify-center items-center'>
                        <input type="email" name="Email-id of the receiver" id="email" className='rounded-md  md:appearance-none appearance-none w-full md:px-32  py-2 text-start hover:outline-none placeholder-center ' placeholder='Email-id of the receivert'
                            onChange={handleEmailChange}
                            value={
                                emailformData.email
                            }/>
                    </div>
                    <div className='mt-10 flex justify-center items-center'>
                        <button type='submit' className='bg-green-800 px-4 py-2 rounded-md hover:bg-green-900 text-white'>SEND</button>
                    </div>
                </form>
            </div>
        </div>
        }
            {
            secret && <div className=' flex justify-center mt-10 '>
                <div className='w-5/6 md:w-full lg:w-full xl:w-full p-8 bg-green-950 bg-opacity-50 shadow-md rounded-md'>
                    <h1 className='text-center p-8 text-white text-2xl'>SEND COINS BY SECERT ID</h1>
                    <form className='text-center'
                        onSubmit={handleIdSubmit}>
                        <div className='mt-4 flex justify-center items-center text-start'>
                            <input type="number" pattern="[0-9]*"
                                style={
                                    {
                                        appearance: 'textfield',
                                        hover: "appearance: 'textfield'"
                                    }
                                }
                                name="cointosend"
                                id="coin"
                                className='rounded-md  appearance-none  w-full md:px-32  py-2 text-start hover:outline-none '
                                placeholder='How much coin need to send '
                                onChange={handleIdChange}
                                value={
                                    idformData.coin
                                }
                                onKeyDown={
                                    (e) => {
                                        if (e.key === '-' || e.key === 'e' || parseInt(e.target.value + e.key) > 100000) {
                                            e.preventDefault();
                                        }
                                    }
                                }/>
                        </div>
                    <div className='mt-4 flex justify-center items-center'>
                        <input type="text" name="secretid" id="secretid"
                            onChange={handleIdChange}
                            value={
                                idformData.secretid
                            }
                            className='rounded-md  md:appearance-none appearance-none w-full md:px-32  py-2 text-start hover:outline-none'
                            placeholder='Secret id of the user'/>
                    </div>
                    <div className='mt-10 flex justify-center items-center'>
                        <button type='submit' className='bg-green-800 px-4 py-2 rounded-md hover:bg-green-900 text-white'>SEND</button>
                    </div>
                </form>
            </div>
        </div>
        } </div>
    )
}

export default Send

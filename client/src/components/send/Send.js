import React, { useState } from 'react'

const Send = () => {
    const [email, setEmail] = useState(true)
    const [secret, setSecret] = useState(false)
    const handleEmail=()=>{
       if(email){
        setEmail(true)
       }
       else{
        setSecret(!secret)
        setEmail(!email)
       }
    }
    const handleSecret=()=>{
       if(secret){
        setSecret(true)
       }
       else{
        setEmail(!email)
        setSecret(!secret)
       }

    }
  return (
    <div className=' flex justify-center flex-col md:flex-row md:justify-around  md:mt-36'>
                <div className='flex justify-center flex-col'>
                    <div className='text-center md:text-6xl text-4xl text-white md:mb-36'>Sending Mehtode Using</div>
                    <div className='flex justify-around mt-10 w-full md:-mt-20'>
                        <div>
                            <button className='bg-green-800 px-8 py-2 rounded-md hover:bg-green-900 text-white' onClick={handleEmail}>Email</button>
                        </div>
                        <div>
                            <button className='bg-green-800 px-4 py-2 rounded-md hover:bg-green-900 text-white' onClick={handleSecret}>Secret id</button>
                        </div>
                    </div>
                </div>
                {
                email &&    <div className=' flex justify-center mt-10 '>
                <div className='w-5/6 md:w-full lg:w-full xl:w-full p-8 bg-green-950 bg-opacity-50 shadow-md rounded-md'>
                    <h1 className='text-center p-8 text-white text-2xl'>SEND COINS BY EMAIL</h1>
                    <form className='text-center'>
                        <div className='mt-4 flex justify-center items-center text-start'>
                            <input type="number" pattern="[0-9]*"
                                style={
                                    {
                                        appearance: 'textfield',
                                        hover: "appearance: 'textfield'"
                                    }
                                }
                                name="cointosend"
                                id="cointosend"
                                className='rounded-md  appearance-none  w-full md:px-32  py-2 text-start hover:outline-none '
                                placeholder='How much coin need to send '/>
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <input type="email" name="Email-id of the receiver" id="emailid" className='rounded-md  md:appearance-none appearance-none w-full md:px-32  py-2 text-start hover:outline-none placeholder-center ' placeholder='Email-id of the receivert'/>
                        </div>
                        <div className='mt-10 flex justify-center items-center'>
                            <button type='submit' className='bg-green-800 px-4 py-2 rounded-md hover:bg-green-900 text-white'>BUY</button>
                        </div>
                    </form>
                </div>
            </div>
            }
             {
                secret &&    <div className=' flex justify-center mt-10 '>
                <div className='w-5/6 md:w-full lg:w-full xl:w-full p-8 bg-green-950 bg-opacity-50 shadow-md rounded-md'>
                    <h1 className='text-center p-8 text-white text-2xl'>SEND COINS BY SECERT ID</h1>
                    <form className='text-center'>
                    <div className='mt-4 flex justify-center items-center text-start'>
                            <input type="number" pattern="[0-9]*"
                                style={
                                    {
                                        appearance: 'textfield',
                                        hover: "appearance: 'textfield'"
                                    }
                                }
                                name="cointosend"
                                id="cointosend"
                                className='rounded-md  appearance-none  w-full md:px-32  py-2 text-start hover:outline-none '
                                placeholder='How much coin need to send '/>
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <input type="text" name="secretid" id="secretid" className='rounded-md  md:appearance-none appearance-none w-full md:px-32  py-2 text-start hover:outline-none' placeholder='Secret id of the user'/>
                        </div>
                        <div className='mt-10 flex justify-center items-center'>
                            <button type='submit' className='bg-green-800 px-4 py-2 rounded-md hover:bg-green-900 text-white'>BUY</button>
                        </div>
                    </form>
                </div>
            </div>
            }
              
            </div>
  )
}

export default Send

import React, {useState} from 'react'
import {useUserBuyCoinsMutation} from '../../store/apis/userApi'
import Razorpay from 'razorpay';
const Buy = () => {
    const token = localStorage.getItem('token')
    const [coin, Setcoin] = useState('')
    const [userBuyCoin] = useUserBuyCoinsMutation()
    const handleCoin = (e) => {
        Setcoin(e.target.value);
    }
    const amount = (coin * 1)
    const initPayment = (data) => {
        const options = {
            key:"rzp_test_GQ6IBB6PEgYzoP",
            amount: data.amount,
            currency: data.currency,
            description: "Test Transaction",
            order_id: data.id,
            theme: {
                color: "#3399cc"
            }
        };
    
        fetch("http://localhost:4000/UserCoinByVerify", {
            method: "POST",
            body: JSON.stringify(options),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json()).then((data) => {
            console.log("form verify",data);
        }).catch((error) => {
            console.log(error);
        });
    
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    

    const handlePayment = async () => {
        try {
            const {data} = await userBuyCoin({amount,coin,token});
            console.log(data)
            initPayment(data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className=' flex justify-center flex-col md:flex-row md:justify-around  md:mt-36'>
                <div className='text-center pt-10 md:mt-32'>
                    <h1 className='md:text-5xl text-4xl text-white '>Buy "ASP" coins in a few steps</h1>
                    <p className='text-xl text-white mt-2'>Choose from 96 fiat currencies</p>
                </div>
                <div className=' flex justify-center mt-10 '>
                    <div className='w-5/6 md:w-full lg:w-full xl:w-full p-8 bg-green-950 bg-opacity-50 shadow-md rounded-md'>
                        <h1 className='text-center p-8 text-white text-2xl'>BUY COINS</h1>
                        <div className='mt-4 flex justify-center items-center text-start'>
                            <input type="number" pattern="[0-9]*"
                                value={coin}
                                onChange={handleCoin}
                                style={
                                    {
                                        appearance: 'textfield',
                                        hover: "appearance: 'textfield'"
                                    }
                                }
                                name="buyamount"
                                id="buyamount"
                                className='appearance-none  text-xl w-full md:px-32  py-2 text-start hover:outline-none bg-transparent text-white border-b-2 '
                                placeholder='Coin you want '/>
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <input type="text" name="buyamount" id="buyamount"
                                value={
                                    `${
                                        amount <= 0 ? "" : "₹" + amount
                                    }`
                                }
                                className='md:appearance-none appearance-none w-full md:px-32 text-xl py-1 text-start bg-transparent text-white focus:outline-none border-b-2 '
                                placeholder='The amount you pay'
                                readOnly/>
                        </div>
                        <div className='mt-10 flex justify-center items-center'>
                            <button type='submit'
                                onClick={handlePayment}
                                className='bg-green-800 px-4 py-2 rounded-md hover:bg-green-900 text-white'>BUY</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Buy

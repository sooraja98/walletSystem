import React, { useEffect } from 'react';
import NavBar from '../components/navbar/NavBar.js';
import Buy from '../components/buy/Buy.js';
import UserTokenCheck from '../customhook/UserValidate.js';

const BuyPage = () => {
 const tokenCheck=UserTokenCheck()
  useEffect(()=>{
  },[tokenCheck])
    return (
        <div>
            <NavBar />
            <Buy  />
        </div>
    );
};

export default BuyPage;

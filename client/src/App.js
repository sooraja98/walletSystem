import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import BuyPage from './pages/BuyPage';
import SendPage from './pages/SendPage';
import HomeUser from './pages/HomeUser';
import UserProfilePage from './pages/UserProfilePage';
import ParticleBackground from './components/particle/ParticleBackground';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<WithParticleBackground />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function WithParticleBackground() {
  return (
    <>
      <ParticleBackground />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/userhome" element={<HomeUser />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/send" element={<SendPage />} />
        <Route path="/logout" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

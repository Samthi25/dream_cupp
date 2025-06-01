import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import MenuPage from './pages/MenuPage';
import DreamCup from './pages/DreamCup';
//import Meny from './components/menypage/MenyPage';
//import Login from './pages/Login';
//import AdminDash from './admindash/Admindash';
//import Drommekoppen from './pages/Drommekoppen';

/* import AnimasjonTester from './pages/AnimasjonTester'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'; */

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meny" element={<MenuPage />} />
        <Route path="/drommekoppen" element={<DreamCup />} />
        {/*<Route path="/login" element={<Login />} />
        <Route path="/admindash" element={<AdminDash />} /> *}
        {/*         <Route path="/animasjontester" element={<AnimasjonTester />} /> */}
      </Routes>
      
      <Footer /> 

    </Router>
  );
}

export default App;
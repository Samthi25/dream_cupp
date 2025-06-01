import React from "react";
import Menu from '../components/menupage/Menu';  
import Nyheter from '../components/menupage/Nyheter';  
//import './styles.css'; 
import './MenuPage.css'
const MenyPage = () => {
  return (
    <div className="meny-page-container">
      <h2 className="meny-header">Menu List</h2>
        <div className="meny-page"> 
          <Nyheter />  
          <Menu />  
        </div>
    </div>
  );
};

export default MenyPage;

import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Manu from "./pages/About";

function App() {
  return (
    <div className="App">
      {/* ใช้คลาส navbar สำหรับ Navbar */}
      <Navbar className="navbar" />
      
      <main className="container mt-4" >
        <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
        <p>สาขาอาหารไทยที่มีความภูมิใจในการนำเสนออาหารที่หลากหลายและรสชาติที่ไม่เหมือนใคร ให้ทุกมื้อเป็นความสุขที่ไม่มีที่สิ้นสุด</p>
      </main>
      
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h2>ของคาว</h2>
            <p>This is where the main content goes.</p>
          </div>
          <div className="col-md-4">
            <h2>ของหวาน</h2>
            <p>This is where the sidebar content goes.</p>
          </div>
        </div>
      </main>

      <main className="container mt-4">
          <Home />
      </main>
      
      <main className="container mt-4">
          <Manu />
      </main>
      
      {/* ใช้คลาส footer สำหรับ Footer */}
      <Footer className="footer" />
    </div>
  );
}

export default App;


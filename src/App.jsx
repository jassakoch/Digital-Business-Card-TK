import React from 'react';
import './About.css';
import './index.css';
import './footer.css';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';


export default function App() {


  return (
    <div className="app-container">
      <Info/>
      <About/>
      <Footer/>
    </div>
  )
}



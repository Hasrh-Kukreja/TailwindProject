import React from 'react';
import "./styles/tailwind.css"
import Header from './components/Header/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Car from './car';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>

    <Header />

    <Router>
      <Routes>
          <Route  exact path="/" Component={Main} />
          <Route  exact path="/car" Component={Car} />
      </Routes>
    </Router>

    <Footer />
    
     
    </>
  );
}

export default App;
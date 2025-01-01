import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import IssueCertificate from './pages/IssueCertificate';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/issue' element={<IssueCertificate />} />
      </Routes>
    </Router>
  );
}

export default App;

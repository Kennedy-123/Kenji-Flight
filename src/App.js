import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Flight from './components/Flight';
// import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Flight' element={<Flight/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

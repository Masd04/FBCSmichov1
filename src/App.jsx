import React from 'react';
import {Navbar, Footer} from './components';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Klub from './pages/Klub';
import Tymy from './pages/Tymy';
import Treninky from './pages/Treninky';
import Partneri from './pages/Partneri';
import Kontakt from './pages/Kontakt';
import Clanek from './pages/Clanek';
import styles from "./style";
import { gym } from "./static";

function App() {
  return (
    <Router basename={"/FBCSmichov1"}>
    {/* <div className="bg-cover bg-center fixed top-0 left-0 right-0 bottom-0" style={{ backgroundImage: `url(${gym})` }}> */}
    <div className="bg-primary fixed top-0 left-0 right-0 bottom-0">
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-scroll">
    
    <div className="w-full overflow-hidden">

    <div className={`bg-primary ${styles.padingX} ${styles.flexCenter}`}>
      <div className={`text-white ${styles.boxWidth} fixed top-0 z-10`}>
        <Navbar />
      </div>
    </div>


      <div className={`${styles.flexStart} ${styles.paddingY}`}>
        <div className={`${styles.paddingY} ${styles.boxWidth}`}>              
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/klub" element={<Klub />} />
        <Route path="/tymy" element={<Tymy />} />
        <Route path="/treninky" element={<Treninky />} />
        <Route path="/partneri" element={<Partneri />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/clanek" element={<Clanek />} />
      </Routes>
        </div>
      </div>

      

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
        </div>
    </div>






    </div>

    </div>
    </div>
    </Router>
  )
}

export default App

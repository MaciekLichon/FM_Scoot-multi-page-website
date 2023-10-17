import React from 'react';

import { Route, Routes } from 'react-router';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Locations from './components/pages/Locations/Locations';
import Careers from './components/pages/Careers/Careers';
import NotFound from './components/pages/NotFound/NotFound';
import SignUp from './components/common/SignUp/SignUp';
import Footer from './components/common/Footer/Footer';
import Navbar from './components/common/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <ReactLenis root>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SignUp />
      <Footer />
    </ReactLenis>
  );
};

export default App

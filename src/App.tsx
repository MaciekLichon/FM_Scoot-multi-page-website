import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Locations from "./components/pages/Locations/Locations";
import Careers from "./components/pages/Careers/Careers";
import NotFound from "./components/pages/NotFound/NotFound";
import SignUp from "./components/common/SignUp/SignUp";
import Footer from "./components/common/Footer/Footer";
import Navbar from "./components/common/Navbar/Navbar";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <ReactLenis root>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <SignUp />
      <Footer />
    </ReactLenis>
  );
};

export default App;

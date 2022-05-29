import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Services from "./components/Services";
import Destination from "./components/Destination";
import Offer from "./components/Offer";
import Tours from "./components/Tours";
import Testimonial from "./components/Testimonial";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default App;

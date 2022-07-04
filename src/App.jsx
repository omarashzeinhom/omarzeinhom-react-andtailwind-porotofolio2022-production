import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import NavigationBar from "./components/nav/NavigationBar";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portofolio/Portfolio";
import Certificates from "./components/certificates/Certificates";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AnimatedBackground from "./components/animbackground/AnimatedBackground";


const App = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <About />
      <Experience />
      <Services />
      <Portfolio/>
      <Certificates/>
      <Testimonials />
      <Contact />
<AnimatedBackground />
      <Footer />
    </>
  );
};

export default App;

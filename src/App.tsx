import { useState } from "react";
import NavBar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";
import Header from "./components/layout/Header";
import Overview from "./components/layout/Overview";
import Projects from "./components/layout/Projects";
import Footer from "./components/sections/footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} />
      {/*HEADER*/}
      <Header />
      {/*OVERVIEW SECTION*/}
      <Overview />
      {/*PROJECT SECTION */}
      <Projects />
      {/*FOOTER */}
      <Footer />
    </>
  );
}

export default App;

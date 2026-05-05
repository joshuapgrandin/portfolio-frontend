import { useState } from "react";
import NavBar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";
import Header from "./components/layout/Header";
import Overview from "./components/layout/Overview";

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
    </>
  );
}

export default App;

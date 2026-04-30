import { useState } from "react";
import NavBar from "./components/layout/Navbar";
import MobileMenu from "./components/layout/MobileMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} />
    </>
  );
}

export default App;

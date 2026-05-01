import Logo from "../ui/Logo";
import type { NavLink, NavLinkId } from "../../types";
import NavLinks from "../ui/NavLinks";
import StatusTab from "../ui/StatusTab";
import HamBurger from "../ui/HamBurger";
import { useState } from "react";

const links: NavLink[] = [
  { id: "overview", label: "overview", href: "#overview" },
  { id: "services", label: "services", href: "#services" },
  { id: "deployments", label: "deployments", href: "#deployments" },
  { id: "logs", label: "logs", href: "#logs" },
  { id: "contact", label: "contact", href: "#contact" },
];

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavBar = ({ isMenuOpen, setIsMenuOpen }: NavBarProps) => {
  const [activeLink, setActiveLink] = useState<NavLinkId>("overview");

  return (
    <div className="bg-bg-2 border-line w-full border-b">
      <nav className="mx-auto flex h-18 max-w-600 items-center justify-between px-6">
        <div className="flex items-center gap-6 p-6">
          <Logo />
          <div>
            <h1 className="text-2xl text-gray-50">Joshua Petrie</h1>
            <p className="text-ink-faint text-sm">FULL-STACK / SYSTEM #00471</p>
          </div>
        </div>
        <NavLinks
          links={links}
          active={activeLink}
          onLinkClick={setActiveLink}
        />
        <div className="nav:flex hidden items-center gap-4">
          <p className="text-ink-dim text-sm">region: eu-west-2</p>
          <StatusTab status="live" />
        </div>
        <HamBurger onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </nav>
    </div>
  );
};

export default NavBar;

import Logo from "../ui/Logo";
import type { NavLink, NavLinkId } from "../../types";
import NavLinks from "../ui/NavLinks";
import StatusTab from "../ui/StatusTab";
import HamBurger from "../ui/HamBurger";

const links: NavLink[] = [
  { id: "overview", label: "overview", href: "#overview" },
  { id: "services", label: "services", href: "#services" },
  { id: "deployments", label: "deployments", href: "#deployments" },
  { id: "logs", label: "logs", href: "#logs" },
  { id: "contact", label: "contact", href: "#contact" },
];

const activeLink: NavLinkId = "overview";

const NavBar = () => {
  return (
    <header className="bg-bg-1 border-b-line w-full border-b">
      <nav className="md: mx-auto flex h-18 max-w-600 items-center justify-between px-6">
        <div className="flex items-center gap-6 p-6">
          <Logo />
          <div>
            <h1 className="text-2xl text-gray-50">Joshua Petrie</h1>
            <p className="text-ink-faint text-sm">FULL-STACK / SYSTEM #00471</p>
          </div>
        </div>
        <NavLinks links={links} active={activeLink} />
        <div className="nav:flex hidden items-center gap-4">
          <p className="text-ink-dim text-sm">Region: eu-west-2</p>
          <StatusTab status="live" />
        </div>
        <HamBurger />
      </nav>
    </header>
  );
};

export default NavBar;

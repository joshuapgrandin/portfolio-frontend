import { useEffect, useState } from "react";
import type { NavLink, NavLinkId } from "../../types";
import MobileNavLinks from "../ui/MobileNavLinks";

interface MobileMenuProps {
  isOpen: boolean;
}

const links: NavLink[] = [
  {
    id: "overview",
    label: "overview",
    href: "#overview",
    description: "live system dashboard",
  },
  {
    id: "services",
    label: "services",
    href: "#services",
    description: "what i do",
  },
  {
    id: "deployments",
    label: "deployments",
    href: "#deployments",
    description: "past projects",
  },
  { id: "logs", label: "logs", href: "#logs", description: "event stream" },
  {
    id: "contact",
    label: "contact",
    href: "#contact",
    description: "open a connection",
  },
];

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const text = "/pages";
  const [displayText, setDisplayText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [activeLink, setActiveLink] = useState<NavLinkId>("overview");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    // code
    if (isOpen && !isComplete) {
      interval = setInterval(() => {
        setDisplayText((prev) => {
          if (prev + 1 >= text.length) {
            setIsComplete(true);
            clearInterval(interval);
          }
          return prev + 1;
        });
      }, 80);
    }

    return () => {
      clearInterval(interval);
      setDisplayText(0);
      setIsComplete(false);
    };
  }, [isOpen]);

  return (
    <div
      className={`bg-bg-1 border-line fixed top-18 left-0 h-full w-full overflow-auto border p-6 transition-all duration-200 ease-out ${isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
    >
      <div className="flex items-center">
        <p className="flex items-center">
          <span className="text-accent mr-2">$</span>
          <span className="text-ink-faint mr-2">ls</span>
          <span className="mr-2">{text.slice(0, displayText)}</span>
          <div className="bg-accent animate-blink h-4 w-1"></div>
        </p>
      </div>
      <div className="text-ink-faint border-line mt-10 flex justify-between border-b-2 border-dashed pb-2">
        <p>NAVIGATION</p>
        <p>5 ROUTES</p>
      </div>
      <div>
        <MobileNavLinks
          links={links}
          active={activeLink}
          onLinkClick={setActiveLink}
          isOpen={isOpen}
          isComplete={isComplete}
        />
      </div>
    </div>
  );
};

export default MobileMenu;

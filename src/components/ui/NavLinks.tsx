import type { NavLink, NavLinkId } from "../../types";

interface NavLinkProps {
  links: NavLink[];
  active: NavLinkId;
  onLinkClick?: (id: NavLinkId) => void;
}

const NavLinks = ({ links, active, onLinkClick }: NavLinkProps) => {
  return (
    <ul className="border-line bg-bg-2 nav:flex hidden items-center gap-6 rounded-md border p-3">
      {links.map((link) => (
        <li className="">
          <a
            href={link.href}
            key={link.id}
            onClick={() => onLinkClick?.(link.id)}
            className={`p-2 ${active === link.id ? "text-bg bg-accent rounded-md transition-all hover:animate-pulse" : "text-ink-faint hover:bg-bg-3 transition-all hover:rounded-md hover:text-gray-50"}`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

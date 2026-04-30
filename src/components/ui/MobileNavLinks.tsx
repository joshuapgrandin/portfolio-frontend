import type { NavLink, NavLinkId } from "../../types";

interface NavLinkProps {
  links: NavLink[];
  active: NavLinkId;
  onLinkClick?: (id: NavLinkId) => void;
  isOpen?: boolean;
  isComplete?: boolean;
}

const MobileNavLinks = ({
  links,
  active,
  onLinkClick,
  isOpen,
  isComplete,
}: NavLinkProps) => {
  return (
    <ul className="flex flex-col items-center gap-6 py-10">
      {links.map((link, index) => (
        <li
          style={{ animationDelay: `${index * 60}ms` }}
          className={`${isOpen && isComplete ? "animate-fade-up" : "opacity-0"} border-line flex w-full items-center justify-between border-b-2 border-dashed pb-2`}
          key={link.id}
        >
          <div className="flex items-center gap-4">
            <p
              className={`text-accent text-xl ${active === link.id ? "visible" : "invisible"}`}
            >
              →
            </p>
            <a
              href={link.href}
              key={link.id}
              onClick={() => onLinkClick?.(link.id)}
              className={`p-2 ${active === link.id ? "text-accent rounded-md transition-all hover:animate-pulse" : "hover:bg-bg-3 text-gray-50 transition-all hover:rounded-md hover:text-gray-50"}`}
            >
              {link.label}
            </a>
          </div>

          <p className="text-ink-faint text-sm">{link.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavLinks;

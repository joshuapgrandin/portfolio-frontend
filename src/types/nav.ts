export type NavLinkId =
  | "overview"
  | "services"
  | "deployments"
  | "logs"
  | "contact";

export interface NavLink {
  id: NavLinkId;
  label: string;
  href: string;
  description?: string;
}

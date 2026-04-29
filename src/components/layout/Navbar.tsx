import Logo from "../ui/Logo";

const NavBar = () => {
  return (
    <nav className="bg-bg-1 border-b-line flex h-16 w-screen items-center justify-between border-b">
      <div className="flex items-center gap-6 p-6">
        <Logo />
        <div>
          <h1 className="text-2xl text-gray-50">Josh Petrie</h1>
          <p className="text-ink-faint text-sm">FULL-STACK / SYSTEM #00471</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

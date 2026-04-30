const HamBurger = () => {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className="nav:hidden bg-bg-2 border-line hover:border-accent flex h-14 w-16 cursor-pointer flex-col items-start justify-center gap-2 border p-4 transition-colors ease-in"
    >
      <span className="border-accent w-full border-b"></span>
      <span className="border-accent-2 w-[70%] border-b-2"></span>
      <span className="border-accent w-full border-b"></span>
    </button>
  );
};

export default HamBurger;

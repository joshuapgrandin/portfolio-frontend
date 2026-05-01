import Terminal from "../ui/Terminal";

const Header = () => {
  return (
    <header className="bg-bg w-full">
      <div className="nav:flex-row nav:justify-between mx-auto flex max-w-600 flex-col items-center gap-12 px-6 py-12">
        <div className="flex items-start gap-2">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-2">
              <div className="border-accent w-6 border-b"></div>
              <p className="text-ink-dim text-xs">
                PORTFOLIO/V2 - UPTIME 99.94%
              </p>
            </div>

            <h1 className="text-7xl font-thin">
              I build <span className="text-accent">full-stack</span> systems{" "}
              <br />
              that{" "}
              <span className="border-accent-2 border-b-2 pb-2">
                stay running.
              </span>
            </h1>
            <div className="mt-6 flex gap-16">
              <div className="space-y-2">
                <p className="text-ink-dim text-xs">BASED IN</p>
                <p className="text-sm">Manchester, UK</p>
              </div>
              <div className="space-y-2">
                <p className="text-ink-dim text-xs">STACK</p>
                <p className="text-sm">
                  Java · React · TypeScript · Spring Boot
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-ink-dim text-xs">STATUS</p>
                <p className="text-accent text-sm">Open to work</p>
              </div>
            </div>
          </div>
        </div>
        <Terminal />
      </div>
    </header>
  );
};

export default Header;

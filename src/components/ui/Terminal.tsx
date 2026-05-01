import { useEffect, useState } from "react";

const Terminal = () => {
  const [currentTime, setCurrentTime] = useState<String>("");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    setCurrentTime(new Date().toLocaleTimeString());

    interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-bg-2 border-line w-full border md:w-96">
      <div className="text-ink-dim border-line bg-bg-3 flex items-center justify-between border p-2 text-sm">
        <p>~/portfolio · zsh</p>
        <p>{currentTime}</p>
      </div>
      <div className="p-2">
        <div className="flex flex-col gap-2">
          <p className="text-ink-dim text-xs">
            <span className="text-accent">$ </span>whoami
          </p>
          <p className="text-xs">josh.petrie — software developer</p>
          <p className="text-ink-dim text-xs">
            <span className="text-accent">$ </span>cat about.md
          </p>
          <p className="text-xs">
            CS grad, ex-OpenText. Builds backends <br /> that scale and
            frontends people use.
          </p>
          <p className="text-ink-dim text-xs">
            <span className="text-accent">$ </span>ls --side-projects
          </p>
          <p className="text-xs">/fs-finance-tracker /fs-job-tracker</p>
          <p className="text-ink-dim flex gap-2 text-xs">
            <span className="text-accent">$ </span>
            <div className="bg-accent animate-blink h-4 w-0.5"></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

// $ whoami
// josh.petrie — software developer
// $ cat about.md
// CS grad, ex-OpenText. Builds backends
// that scale and frontends people use.
// $ ls --side-projects
// storm-plugins/ smokebot/ artio/
// $

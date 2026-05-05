import { useEffect, useState } from "react";
import { STREAM_DATA } from "../../../types/stream";

const requestColour = {
  GET: "text-blue-300",
  POST: "text-orange-300",
  DELETE: "text-red-400",
  PUT: "text-gray-500",
};

const RequestStreamCard = () => {
  const [startingIndex, setStartingIndex] = useState(0);
  const visible = STREAM_DATA.slice(startingIndex, startingIndex + 8);
  const getTime = (index: number) => {
    const d = new Date();
    d.setSeconds(d.getSeconds() - (7 - index));
    return d.toLocaleTimeString();
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      setStartingIndex((prev) => {
        if (prev !== STREAM_DATA.length - 8) {
          return prev + 1;
        } else return 0;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-bg-1 border-line h-60 overflow-hidden border">
      <div className="border-line flex items-center justify-between border-b p-4 text-xs">
        <p className="text-ink-faint">REQUEST STREAM</p>
        <p className="text-accent animate-pulse">STREAMING</p>
      </div>
      <div className="flex flex-col gap-2 overflow-clip p-2">
        {visible.map((data, index) => (
          <div
            key={`${data.endpoint}-${data.request}-${index}`}
            className={`grid grid-cols-[80px_60px_1fr_40px] gap-x-4 text-[10px] ${
              index === 7 ? "animate-fade-up" : ""
            }`}
          >
            <p className="text-ink-faint">{getTime(index)}</p>
            <p className={requestColour[data.request]}>{data.request}</p>
            <p className="text-ink-dim">{data.endpoint}</p>
            <p className="text-ink-faint">{data.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestStreamCard;

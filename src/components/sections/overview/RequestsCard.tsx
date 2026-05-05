import { useEffect, useState } from "react";
import MetricCard from "./MetricCard";

const randomNumber = (x: number, y: number) =>
  Math.floor(Math.random() * y) + x;

const RequestsCard = () => {
  const [requests, setRequests] = useState<number>(randomNumber(15, 50));

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      // set the number every 2 seconds
      setRequests(randomNumber(15, 50));
    }, 2000);

    // clean up
    return () => clearInterval(interval);
  }, []);

  return (
    <MetricCard title="REQUESTS / SEC">
      <p className="text-accent mt-2 text-4xl">{requests}</p>
      <p className="text-accent-2 mt-2 text-xs">▲ 12% vs avg</p>
    </MetricCard>
  );
};

export default RequestsCard;

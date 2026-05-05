import MetricCard from "./MetricCard";

const LatencyCard = () => {
  return (
    <MetricCard title="P95 LATENCY">
      <p className="text-ink pt-2 text-4xl">
        87<span className="text-ink-faint text-xs">ms</span>
      </p>
      <p className="text-accent-2 mt-2 text-xs">▼ 4ms vs hr</p>
    </MetricCard>
  );
};

export default LatencyCard;

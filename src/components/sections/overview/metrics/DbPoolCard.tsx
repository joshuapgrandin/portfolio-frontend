import MetricCard from "./MetricCard";

const DbPoolCard = () => {
  return (
    <MetricCard title="DB POOL">
      <p className="text-accent pt-2 text-4xl">
        14<span className="text-ink-faint text-sm">/20</span>
      </p>
      <p className="mt-2 text-xs text-orange-300">▲ approaching cap</p>
    </MetricCard>
  );
};

export default DbPoolCard;

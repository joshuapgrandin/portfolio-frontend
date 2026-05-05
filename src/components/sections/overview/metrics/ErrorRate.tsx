import MetricCard from "./MetricCard";

const ErrorRateCard = () => {
  return (
    <MetricCard title="ERROR RATE">
      <p className="text-ink pt-2 text-4xl">
        0.02<span className="text-ink-faint text-xs">%</span>
      </p>
      <p className="text-accent-2 mt-2 text-xs">stable</p>
    </MetricCard>
  );
};

export default ErrorRateCard;

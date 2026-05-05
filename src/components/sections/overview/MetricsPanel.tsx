import MetricCard from "./MetricCard";
import RequestsCard from "./RequestsCard";
import RequestStreamCard from "./RequestStreamCard";

const MetricsPanel = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-4">
        <RequestsCard />
        <MetricCard title="P95 LATENCY" />
        <MetricCard title="ERROR RATE" />
        <MetricCard title="DB POOL" />
        <div className="col-span-2">
          <RequestStreamCard />
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;

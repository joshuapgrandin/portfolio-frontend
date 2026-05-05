import DbPoolCard from "./DbPoolCard";
import ErrorRateCard from "./ErrorRate";
import LatencyCard from "./Latency";
import RequestsCard from "./RequestsCard";
import RequestStreamCard from "./RequestStreamCard";

const MetricsPanel = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <RequestsCard />
      <LatencyCard />
      <ErrorRateCard />
      <DbPoolCard />
      <div className="col-span-2">
        <RequestStreamCard />
      </div>
    </div>
  );
};

export default MetricsPanel;

type statusType = "live" | "offline";

interface StatusTabProps {
  status: statusType;
}

const statusColours: Record<statusType, string> = {
  live: "bg-accent/20 border border-accent/40 text-accent",
  offline: "bg-ink-faint border border-ink-faint",
};

const statusCircleColours: Record<statusType, string> = {
  live: "bg-accent",
  offline: "bg-ink-faint",
};

const StatusTab = ({ status }: StatusTabProps) => {
  return (
    <div className={`flex items-center gap-2 p-2 ${statusColours[status]}`}>
      <div className="relative">
        <div
          className={`animate-ping-ring absolute inset-0 h-2 w-2 rounded-full ${statusCircleColours[status]}`}
        ></div>
        <div
          className={`h-2 w-2 rounded-full ${statusCircleColours[status]}`}
        ></div>
      </div>
      <p className="text-sm font-bold">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
    </div>
  );
};

export default StatusTab;

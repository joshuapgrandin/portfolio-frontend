import type { status } from "../../../types";

interface StatusTabProps {
  projectStatus: status;
}

const statusLabel: Record<status, string> = {
  COMPLETED: "completed",
  IN_PROGRESS: "in progress",
};

const statusColours: Record<status, string> = {
  COMPLETED: "bg-accent/20 border border-accent/40 text-accent",
  IN_PROGRESS: "bg-accent-2/20 border border-accent-2/40 text-accent-2",
};

const statusCircleColours: Record<status, string> = {
  COMPLETED: "bg-accent",
  IN_PROGRESS: "bg-accent-2",
};

const statusTextColour: Record<status, string> = {
  COMPLETED: "text-accent",
  IN_PROGRESS: "text-accent-2",
};

const ProjectStatusTab = ({ projectStatus }: StatusTabProps) => {
  return (
    <div
      className={`flex items-center gap-2 p-2 ${statusColours[projectStatus]}`}
    >
      <div className="relative">
        <div
          className={`animate-ping-ring absolute inset-0 h-2 w-2 rounded-full ${statusCircleColours[projectStatus]}`}
        ></div>
        <div
          className={`h-2 w-2 rounded-full ${statusCircleColours[projectStatus]}`}
        ></div>
      </div>
      <p className={`text-xs font-thin ${statusTextColour[projectStatus]}`}>
        {statusLabel[projectStatus]}
      </p>
    </div>
  );
};

export default ProjectStatusTab;

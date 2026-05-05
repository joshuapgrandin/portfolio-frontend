// src/pages/Overview.tsx
import { useState } from "react";
import PanelCard from "./PanelCard";
import SystemTopology from "./SystemTopology";
import { NODES, type Node } from "../../../types";
import MetricsPanel from "./MetricsPanel";

const Overview = () => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(
    NODES.find((n) => n.id === "api") ?? null,
  );

  return (
    <div className="grid h-[600px] grid-cols-3 gap-0">
      <PanelCard title="System Topology" meta="9 services · 1 db">
        <SystemTopology onNodeSelect={setSelectedNode} />
        <div className="border-line border-t">
          <div className="flex items-center justify-evenly p-2">
            <div className="flex items-center gap-2">
              <div className="bg-accent h-2 w-2"></div>
              <p className="text-ink-dim text-xs">healthy</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-orange-400"></div>
              <p className="text-ink-dim text-xs">degraded</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-300"></div>
              <p className="text-ink-dim text-xs">read replica</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-ink-faint h-2 w-2"></div>
              <p className="text-ink-dim text-xs">idle</p>
            </div>
          </div>
        </div>
      </PanelCard>

      <PanelCard title="Live Metrics" meta="last 60s">
        <MetricsPanel />
      </PanelCard>

      <PanelCard title="Node Inspector" meta={selectedNode?.id ?? "—"}>
        {/* node inspector here */}
      </PanelCard>
    </div>
  );
};

export default Overview;

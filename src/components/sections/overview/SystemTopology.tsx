import { useState } from "react";
import { NODES, EDGES, type Node, type NodeId } from "../../../types/node";

interface SystemTopologyProps {
  onNodeSelect?: (node: Node) => void;
}

const SystemTopology = ({ onNodeSelect }: SystemTopologyProps) => {
  const [activeId, setActiveId] = useState<NodeId>("api");

  const handleClick = (node: Node) => {
    setActiveId(node.id);
    onNodeSelect?.(node);
  };

  // Helper: get a node by id. Returns Node | undefined,
  // so callers must handle the missing case.
  const findNode = (id: NodeId): Node | undefined =>
    NODES.find((n) => n.id === id);

  return (
    <svg
      viewBox="0 0 480 460"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMin meet"
    >
      {/* ===== EDGES (drawn first so nodes sit on top) ===== */}
      {EDGES.map((edge) => {
        const from = findNode(edge.from);
        const to = findNode(edge.to);
        if (!from || !to) return null; // TS narrowing in action

        // Connect bottom-center of `from` to top-center of `to`.
        // Works for the layered top-to-bottom layout we're using.
        const x1 = from.x + from.w / 2;
        const y1 = from.y + from.h;
        const x2 = to.x + to.w / 2;
        const y2 = to.y;

        return (
          <line
            key={`${edge.from}-${edge.to}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            fill="none"
            stroke={edge.active ? "#c4f04b" : "#2f3a3f"}
            strokeWidth={1}
            strokeDasharray={edge.active ? "4 4" : "3 3"}
            className={edge.active ? "animate-dash-flow" : ""}
          />
        );
      })}

      {/* ===== NODES ===== */}
      {NODES.map((node) => {
        const isActive = activeId === node.id;
        return (
          <g
            key={node.id}
            onClick={() => handleClick(node)}
            style={{ cursor: "pointer" }}
            className="topology-node"
          >
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              fill={isActive ? "rgba(196, 240, 75, 0.05)" : "#0f1416"}
              stroke={isActive ? "#c4f04b" : "#2f3a3f"}
              strokeWidth={1}
            />
            <text
              x={node.x + node.w / 2}
              y={node.y + 20}
              textAnchor="middle"
              fill={isActive ? "#c4f04b" : "#d8e2e6"}
              fontSize={11}
              fontFamily="JetBrains Mono, monospace"
            >
              {node.name}
            </text>
            <text
              x={node.x + node.w / 2}
              y={node.y + 34}
              textAnchor="middle"
              fill="#4a5559"
              fontSize={9}
              fontFamily="JetBrains Mono, monospace"
              letterSpacing={0.5}
            >
              {node.sub}
            </text>
            {node.pulsing && (
              <circle
                cx={node.x + node.w - 12}
                cy={node.y + 8}
                r={3}
                fill="#c4f04b"
                className="animate-pulse-dot"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default SystemTopology;

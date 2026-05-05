import type { Node } from "../../../../types";
import NodeCard from "./NodeCard";
import StackCard from "./StackCard";

interface NodeInspectorProps {
  selectedNode: Node | null;
}

const NodeInspector = ({ selectedNode }: NodeInspectorProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* NODE INFORMATION*/}
      <NodeCard selectedNode={selectedNode} />
      {/* STACK BADGES */}
      <StackCard />
    </div>
  );
};

export default NodeInspector;

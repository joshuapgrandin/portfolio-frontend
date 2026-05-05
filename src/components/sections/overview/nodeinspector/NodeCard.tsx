import type { Node } from "../../../../types";

interface NodeCardProps {
  selectedNode: Node | null;
}

const NodeCard = ({ selectedNode }: NodeCardProps) => {
  return (
    <div className="border-line bg-bg-2 w-full border p-4">
      <div className="border-line flex items-center justify-between border-b border-dashed pb-2">
        <h2 className="text-accent">{selectedNode?.name}</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div
              className={`animate-ping-ring bg-accent-2 absolute inset-0 h-1 w-1 rounded-full`}
            ></div>
            <div className={`bg-accent-2 h-1 w-1 rounded-full`}></div>
          </div>
          <p className="text-accent-2 text-xs">HEALTHY</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-ink-dim text-xs">{selectedNode?.description}</p>
      </div>
      <div className="mt-4 flex gap-2 text-xs">
        {selectedNode?.stack.map((tech) => {
          return (
            <ul className="border-line-bright bg-bg-3 text-ink border px-2 py-1">
              <li>{tech}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default NodeCard;

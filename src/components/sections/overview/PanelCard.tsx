import type { ReactNode } from "react";

interface PanelCardProps {
  title: string;
  meta?: string;
  children?: ReactNode;
  className?: string;
}

const PanelCard = ({
  title,
  meta,
  children,
  className = "",
}: PanelCardProps) => {
  return (
    <div
      className={`bg-bg border-line flex h-full flex-col border p-2 ${className}`}
    >
      <div className="border-line flex shrink-0 items-center justify-between border-b border-dashed px-6 py-3">
        <p className="text-ink-dim text-xs tracking-wider">
          {title.toUpperCase()}
        </p>
        {meta && <p className="text-ink-faint text-xs">{meta}</p>}
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-6">{children}</div>
    </div>
  );
};

export default PanelCard;

interface MetricCardProps {
  title: string;
  children?: React.ReactNode;
}

const MetricCard = ({ title, children }: MetricCardProps) => {
  return (
    <div className="border-line bg-bg-1 mt-4 h-30 border">
      <div className="p-4">
        <p className="text-ink-faint text-xs">{title.toUpperCase()}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MetricCard;

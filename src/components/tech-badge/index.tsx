interface TechBadgeProps {
  name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg flex items-center justify-center hover:bg-emerald-500/80 hover:text-white">
      {name}
    </span>
  );
};

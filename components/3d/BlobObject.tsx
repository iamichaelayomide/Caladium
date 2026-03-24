export function BlobObject({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`consulting-shape flex items-center justify-center rounded-[32px] border border-white/60 bg-gradient-to-br from-pastel-green to-pastel-blue ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

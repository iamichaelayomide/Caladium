import { cn } from "@/lib/utils";

export function Badge({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-[12px] font-medium tracking-[0.08em] text-muted shadow-soft backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-4 flex items-center gap-3 text-label font-semibold uppercase tracking-[0.12em] text-faint", className)}>
      <span className="h-px w-8 bg-current/60" />
      <span>{children}</span>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { Loader } from "./loader";

function Skeleton({ className, useImage, ...props }: React.HTMLAttributes<HTMLDivElement> & { useImage?: boolean }) {
  if (useImage) {
    return <Loader className={className} />;
  }
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };

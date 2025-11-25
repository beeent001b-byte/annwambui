import { cn } from "@/lib/utils";
import annProfile from "@/assets/ann-profile.jpg";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-32 h-32",
};

export function Loader({ className, size = "md" }: LoaderProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <img
          src={annProfile}
          alt="Loading..."
          className="w-full h-full rounded-full object-cover animate-pulse"
        />
        <div className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
      </div>
    </div>
  );
}

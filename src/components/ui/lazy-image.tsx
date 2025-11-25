import { useState } from "react";
import { Loader } from "./loader";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  loaderSize?: "sm" | "md" | "lg";
  loaderClassName?: string;
}

export function LazyImage({ 
  src, 
  alt, 
  className, 
  loaderSize = "md",
  loaderClassName,
  ...props 
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className={cn("absolute inset-0 flex items-center justify-center bg-muted/50", loaderClassName)}>
          <Loader size={loaderSize} />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        loading="lazy"
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <p className="text-sm">Failed to load image</p>
        </div>
      )}
    </div>
  );
}

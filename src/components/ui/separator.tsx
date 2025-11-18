"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          // Base style
          "relative flex shrink-0 overflow-hidden rounded-full transition-all",

          // Light + Dark perfect border tone
          "bg-gradient-to-r from-border/0 via-border/70 to-border/0 dark:from-border/0 dark:via-border/40 dark:to-border/0",

          // Full screen compatible size
          orientation === "horizontal"
            ? "h-[2px] w-full"
            : "w-[2px] h-full",

          // Smooth animation
          "duration-300 ease-out",

          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator };

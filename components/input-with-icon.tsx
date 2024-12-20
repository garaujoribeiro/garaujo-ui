"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const InputAdornmentContext = React.createContext<"start" | "end">("end");

const InputAdornmentRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    position?: "start" | "end";
  }
>(({ className, position = "end", ...props }, ref) => {
  return (
    <InputAdornmentContext.Provider value={position || "end"}>
      <div
        className={cn("relative", 
          position === "start" && "[&_input]:pl-10",
          position === "end" && "[&_input]:pr-10",
          className)}
        ref={ref}
        {...props}
      />
    </InputAdornmentContext.Provider>
  );
});

InputAdornmentRoot.displayName = "InputWithIconRoot";

const InputAdornment = React.forwardRef<
  HTMLElement,
  React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {

  const position = React.useContext(InputAdornmentContext);

  return (
    <Slot
      className={cn(
        "absolute bg-transparent right-3 top-1/2 transform -translate-y-1/2",
        position === "start" && "left-3",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Slot>
  );
});

InputAdornment.displayName = "InputAdornment";

export { InputAdornmentRoot, InputAdornment };

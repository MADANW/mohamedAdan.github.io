import React from "react";

/**
 * Utility function to combine class names
 */
function cn(...classNames) {
  return classNames
    .filter(Boolean)
    .join(" ")
    .trim();
}

/**
 * Marquee component for continuous scrolling content
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 marquee-container",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around marquee-content", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "pause-on-hover": pauseOnHover,
              "reverse-animation": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export default Marquee; 
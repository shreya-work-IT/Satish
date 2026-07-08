import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../utils/cn";

/**
 * Wraps children in the `.reveal` utility class and flips it to visible
 * once scrolled into view. `as` lets callers pick the wrapping element,
 * and `delay` staggers groups of items via inline transition-delay.
 */
export function Reveal({ as: Tag = "div", delay = 0, className, children, ...rest }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

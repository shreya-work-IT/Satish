import { cn } from "../../utils/cn";
import styles from "./Button.module.css";

/**
 * Renders as an anchor when `href` is supplied, otherwise a button.
 * variant: "primary" | "ghost" | "outline"
 * size: "sm" | "md"
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}) {
  const classes = cn(styles.btn, styles[variant], styles[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

/**
 * Joins conditional class names together, skipping falsy values.
 * Mirrors the common `clsx`/`classnames` API without adding a dependency.
 */
export function cn(...values) {
  return values.filter(Boolean).join(" ");
}

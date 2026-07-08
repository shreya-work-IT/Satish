import DataverseIcon from "../../assets/icons/tech/dataverse.svg";

const paths = {
  crm: (
    <>
      <circle cx="16" cy="12.5" r="4.5" />
      <path d="M7 26c1.4-4.6 5-7 9-7s7.6 2.4 9 7" />
    </>
  ),
  dataverse: null, // Use imported SVG instead
  apps: (
    <>
      <rect x="6.5" y="6.5" width="7.5" height="7.5" rx="1.6" />
      <rect x="18" y="6.5" width="7.5" height="7.5" rx="1.6" />
      <rect x="6.5" y="18" width="7.5" height="7.5" rx="1.6" />
      <rect x="18" y="18" width="7.5" height="7.5" rx="1.6" />
    </>
  ),
  cloud: (
    <path d="M10.5 23a5 5 0 0 1-.7-9.95 6.5 6.5 0 0 1 12.4-2.2A5.25 5.25 0 0 1 21.5 23h-11Z" />
  ),
  migration: (
    <>
      <path d="M5.5 12h13" />
      <path d="M14.5 7.5 19 12l-4.5 4.5" />
      <path d="M26.5 20h-13" />
      <path d="M17.5 24.5 13 20l4.5-4.5" />
    </>
  ),
  integration: (
    <>
      <circle cx="8" cy="9" r="2.6" />
      <circle cx="24" cy="9" r="2.6" />
      <circle cx="16" cy="23" r="2.6" />
      <path d="M10.3 10.4 14 21" />
      <path d="M21.7 10.4 18 21" />
      <path d="M10.6 9h10.8" />
    </>
  ),
  transform: (
    <>
      <path d="M8 10.5a8 8 0 0 1 13.8-3.3" />
      <path d="M18.5 5.5 21.8 7.2 20.1 10.6" />
      <path d="M24 21.5a8 8 0 0 1-13.8 3.3" />
      <path d="M13.5 26.5 10.2 24.8 11.9 21.4" />
    </>
  ),
  ai: (
    <>
      <path d="M16 6c1 4 2.6 5.6 6.5 6.5-3.9 0.9-5.5 2.5-6.5 6.5-1-4-2.6-5.6-6.5-6.5C13.4 11.6 15 10 16 6Z" />
      <path d="M23.5 20c.5 1.8 1.2 2.5 3 3-1.8.5-2.5 1.2-3 3-.5-1.8-1.2-2.5-3-3 1.8-.5 2.5-1.2 3-3Z" />
    </>
  ),
};

export function CapabilityIcon({ name, className }) {
  // For dataverse, use the imported colored SVG as an image
  if (name === "dataverse") {
    return (
      <img
        src={DataverseIcon}
        alt="Dataverse"
        className={className}
        aria-hidden="true"
        style={{ width: "30px", height: "30px" }}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      width="30"
      height="30"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}

/**
 * A generic "current state" process flow versus how the same journey
 * looks once it runs through Dynamics 365, Power Platform and Azure.
 * Used to visualise transformation rather than describe it in prose.
 */
export const currentFlow = [
  { label: "Request comes in", detail: "Email, phone or a spreadsheet somewhere" },
  { label: "Manually triaged", detail: "Someone re-types it into another system" },
  { label: "Passed between teams", detail: "Status lives in inboxes and chat threads" },
  { label: "Chased for updates", detail: "No single place to see where it stands" },
  { label: "Reported after the fact", detail: "Numbers pulled together at month end" },
];

export const futureFlow = [
  { label: "Request captured once", detail: "Through a Power Apps form or Power Pages portal" },
  { label: "Routed automatically", detail: "Power Automate applies your business rules" },
  { label: "Tracked in Dataverse", detail: "One record, one status, visible to everyone" },
  { label: "Assisted by Copilot", detail: "Context and next actions suggested in the flow" },
  { label: "Reported in real time", detail: "Power BI reflects the current state, always" },
];

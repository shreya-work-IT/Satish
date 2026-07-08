/**
 * The roadmap is a real, ordered sequence of how an engagement is built,
 * so stage numbers here encode actual information rather than decoration.
 */
export const roadmapStages = [
  {
    stage: "01",
    title: "Discover",
    description:
      "Map current systems, data and process flows. Understand where work slows down and where the platform needs to flex.",
    output: "Current-state process map & findings",
  },
  {
    stage: "02",
    title: "Design",
    description:
      "Translate findings into a target Dataverse model, Power Platform architecture and Azure landing zone.",
    output: "Solution blueprint & data model",
  },
  {
    stage: "03",
    title: "Build",
    description:
      "Configure Dynamics 365, build Power Platform apps and automations, and stand up Azure services in short, reviewable cycles.",
    output: "Working platform in a test environment",
  },
  {
    stage: "04",
    title: "Migrate & Integrate",
    description:
      "Move data across, connect surrounding systems, and reconcile everything against the source before go-live.",
    output: "Validated data & connected systems",
  },
  {
    stage: "05",
    title: "Adopt & Optimise",
    description:
      "Support go-live, train the teams who use it daily, and keep tuning the platform as processes and AI use cases mature.",
    output: "Adopted platform & improvement backlog",
  },
];

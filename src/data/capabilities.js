/**
 * The eight capability areas requested for the site. Each entry drives a
 * card in the Capabilities section. `icon` refers to a glyph rendered by
 * <CapabilityIcon /> (see components/common) rather than an external
 * image, keeping this list content-only and easy to reorder or extend.
 */
export const capabilities = [
  {
    icon: "crm",
    title: "Dynamics 365 CRM",
    summary:
      "Sales, Customer Service, Field Service and Marketing configured around how your teams actually sell and support.",
    skills: [
      "Sales & opportunity management",
      "Customer service & case routing",
      "Field service scheduling",
      "Marketing journeys & segmentation",
    ],
  },
  {
    icon: "dataverse",
    title: "Dataverse",
    summary:
      "A governed data foundation with the right tables, relationships, security roles and business rules underneath every app.",
    skills: [
      "Data modelling & schema design",
      "Security roles & row-level access",
      "Business rules & calculated logic",
      "Plug-ins & server-side extensibility",
    ],
  },
  {
    icon: "apps",
    title: "Power Platform",
    summary:
      "Power Apps, Power Automate, Power BI and Power Pages, built as a coherent low-code layer instead of disconnected tools.",
    skills: [
      "Model-driven & canvas apps",
      "Automated flows & approvals",
      "Power BI dashboards & data models",
      "Portals with Power Pages",
    ],
  },
  {
    icon: "cloud",
    title: "Azure Services",
    summary:
      "Cloud infrastructure, integration and AI services on Azure, sized and secured for enterprise workloads.",
    skills: [
      "Azure Functions & Logic Apps",
      "Azure Data Factory & Synapse",
      "Identity, networking & security",
      "Monitoring & cost governance",
    ],
  },
  {
    icon: "migration",
    title: "Data Migration",
    summary:
      "Moving legacy and third-party data into Dataverse and Azure without losing history, accuracy or trust in the numbers.",
    skills: [
      "Source-to-target mapping",
      "Cleansing & de-duplication",
      "Staged, reconciled cutover runs",
      "Post-migration validation",
    ],
  },
  {
    icon: "integration",
    title: "Integration",
    summary:
      "Connecting Dynamics 365, Dataverse and Azure to the rest of your estate — ERP, finance, HR and third-party platforms.",
    skills: [
      "API & event-driven integration",
      "Middleware & connector patterns",
      "Real-time & batch synchronisation",
      "Error handling & observability",
    ],
  },
  {
    icon: "transform",
    title: "Business Transformation",
    summary:
      "Reshaping process, ownership and reporting so the platform changes how work actually gets done, not just how it looks.",
    skills: [
      "Current-state process discovery",
      "Target operating model design",
      "Change adoption & enablement",
      "Governance & continuous improvement",
    ],
  },
  {
    icon: "ai",
    title: "AI",
    summary:
      "Copilot, Copilot Studio and Azure AI applied to real workflows — summarising, drafting, predicting and automating decisions.",
    skills: [
      "Copilot Studio agents",
      "Azure OpenAI & cognitive services",
      "Predictive & prescriptive models",
      "AI governance & responsible use",
    ],
  },
];

import dynamics365 from "../assets/icons/tech/dynamics-365.svg";
import dataverse from "../assets/icons/tech/dataverse.svg";
import powerApps from "../assets/icons/tech/power-apps.svg";
import powerAutomate from "../assets/icons/tech/microsoft-power-automate.svg";
import powerBi from "../assets/icons/tech/powerbi.svg";
import powerPages from "../assets/icons/tech/power-pages.svg";
import copilotStudio from "../assets/icons/tech/copilot-studio.svg";
import azure from "../assets/icons/tech/azure.svg";
import azureFunctions from "../assets/icons/tech/azure-functions.svg";
import azureDataFactory from "../assets/icons/tech/azure-data-factory.svg";
import synapse from "../assets/icons/tech/synapse.svg";
import openai from "../assets/icons/tech/openai.svg";
import azureMonitor from "../assets/icons/tech/azure-monitor.svg";
import sharepoint from "../assets/icons/tech/microsoft-sharepoint.svg";
import sqlServer from "../assets/icons/tech/microsoft-sql-server.svg";
import azureDevops from "../assets/icons/tech/azure-devops.svg";
import dotnet from "../assets/icons/tech/dotnet.svg";
import github from "../assets/icons/tech/github.svg";

/**
 * The technology stack rendered in the marquee and reused as floating
 * chips in the hero animation. Icons are either sourced from the
 * Dashboard Icons collection (dashboardicons.com) or, where a product
 * has no entry there yet, a hand-built icon drawn in the same flat,
 * single-badge style so the set reads as one consistent family.
 */
export const techStack = [
  { name: "Dynamics 365", icon: dynamics365 },
  { name: "Dataverse", icon: dataverse },
  { name: "Power Apps", icon: powerApps },
  { name: "Power Automate", icon: powerAutomate },
  { name: "Power BI", icon: powerBi },
  { name: "Power Pages", icon: powerPages },
  { name: "Copilot Studio", icon: copilotStudio },
  { name: "Azure", icon: azure },
  { name: "Azure Functions", icon: azureFunctions },
  { name: "Azure Data Factory", icon: azureDataFactory },
  { name: "Azure Synapse", icon: synapse },
  { name: "Azure OpenAI", icon: openai },
  { name: "Azure Monitor", icon: azureMonitor },
  { name: "SharePoint", icon: sharepoint },
  { name: "SQL Server", icon: sqlServer },
  { name: "Azure DevOps", icon: azureDevops },
  { name: ".NET", icon: dotnet },
  { name: "GitHub", icon: github },
];

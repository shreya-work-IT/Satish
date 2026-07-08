import { Button } from "../../components/common/Button";
import { TechMarquee } from "../../components/common/TechMarquee";
import dynamics365 from "../../assets/icons/tech/dynamics-365.svg";
import azure from "../../assets/icons/tech/azure.svg";
import powerAutomate from "../../assets/icons/tech/microsoft-power-automate.svg";
import dataverse from "../../assets/icons/tech/dataverse.svg";
import powerBi from "../../assets/icons/tech/powerbi.svg";
import openai from "../../assets/icons/tech/openai.svg";
import powerApps from "../../assets/icons/tech/power-apps.svg";
import azureFunc from "../../assets/icons/tech/azure-functions.svg";
import copilotStudio from "../../assets/icons/tech/copilot-studio.svg";
import styles from "./Hero.module.css";

const chips = [
  { icon: dynamics365, label: "Dynamics 365", pos: styles.chip1 },
  { icon: azure, label: "Azure", pos: styles.chip2 },
  { icon: powerAutomate, label: "Power Automate", pos: styles.chip3 },
  { icon: dataverse, label: "Dataverse", pos: styles.chip4 },
  { icon: powerBi, label: "Power BI", pos: styles.chip5 },
  { icon: openai, label: "Azure OpenAI", pos: styles.chip6 },
];

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.blobOne} />
        <span className={styles.blobTwo} />
        <span className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="eyebrow">D365 · Dataverse · Power Platform · Azure · AI</span>
          <h1 className={styles.headline}>
            One connected platform for how your business actually runs.
          </h1>
          <p className={styles.sub}>
            We design and build on Dynamics 365, Dataverse, Power Platform and
            Azure, then layer in AI so the platform doesn&rsquo;t just record
            work — it moves it forward. Discovery, migration, integration and
            adoption, handled as one continuous engagement.
          </p>
          <div className={styles.ctas}>
            <Button href="#contact">Start a conversation</Button>
            <Button href="#capabilities" variant="outline">
              Explore capabilities
            </Button>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.stackedArchitecture}>
            {/* Layer 1 - Intelligence */}
            <div className={styles.architectureLayer}>
              <div className={styles.layerContent}>
                <div className={styles.largeIcon}>
                  <img src={openai} alt="Azure OpenAI" />
                </div>
                <div className={styles.layerInfo}>
                  <h3>Intelligence Layer</h3>
                  <p>Azure OpenAI & Copilot Studio</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.layerDivider} />

            {/* Layer 2 - Applications */}
            <div className={styles.architectureLayer}>
              <div className={styles.layerContent}>
                <div className={styles.iconGroup}>
                  <div className={styles.smallIcon}><img src={dynamics365} alt="Dynamics 365" /></div>
                  <div className={styles.smallIcon}><img src={powerApps} alt="Power Apps" /></div>
                  <div className={styles.smallIcon}><img src={powerBi} alt="Power BI" /></div>
                </div>
                <div className={styles.layerInfo}>
                  <h3>Applications Layer</h3>
                  <p>Dynamics 365, Power Apps, Power BI</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.layerDivider} />

            {/* Layer 3 - Data */}
            <div className={styles.architectureLayer}>
              <div className={styles.layerContent}>
                <div className={styles.largeIcon}>
                  <img src={dataverse} alt="Dataverse" />
                </div>
                <div className={styles.layerInfo}>
                  <h3>Data Core Layer</h3>
                  <p>Dataverse - Unified Data Foundation</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.layerDivider} />

            {/* Layer 4 - Integration */}
            <div className={styles.architectureLayer}>
              <div className={styles.layerContent}>
                <div className={styles.iconGroup}>
                  <div className={styles.smallIcon}><img src={powerAutomate} alt="Power Automate" /></div>
                  <div className={styles.smallIcon}><img src={azureFunc} alt="Azure Functions" /></div>
                </div>
                <div className={styles.layerInfo}>
                  <h3>Integration Layer</h3>
                  <p>Power Automate & Azure Functions</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.layerDivider} />

            {/* Layer 5 - Foundation */}
            <div className={styles.architectureLayer}>
              <div className={styles.layerContent}>
                <div className={styles.largeIcon}>
                  <img src={azure} alt="Azure" />
                </div>
                <div className={styles.layerInfo}>
                  <h3>Foundation Layer</h3>
                  <p>Azure Infrastructure & Cloud Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}

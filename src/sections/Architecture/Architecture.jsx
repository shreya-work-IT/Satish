import { SectionHeading } from "../../components/common/SectionHeading";
import { Reveal } from "../../components/common/Reveal";
import styles from "./Architecture.module.css";

const layers = [
  {
    key: "foundation",
    title: "Foundation — Azure",
    description:
      "Compute, storage, identity, networking and AI services. Sized and secured to enterprise standards, with cost and performance monitored continuously.",
  },
  {
    key: "platform",
    title: "Platform — Power Platform & Dataverse",
    description:
      "The shared data model, security roles and low-code layer that every app, flow and report is built on top of.",
  },
  {
    key: "experience",
    title: "Experience — Dynamics 365",
    description:
      "Sales, service, field service and marketing experiences that teams use every day, configured around real workflows.",
  },
  {
    key: "intelligence",
    title: "Intelligence — AI",
    description:
      "Copilot and Copilot Studio agents sit across every layer, reading and acting on the same governed data underneath.",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className={`section-pad ${styles.section}`}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          eyebrow="Architecture"
          title="One stack, four layers, built in that order."
          description="This is the shape of almost every engagement: a solid Azure foundation, a governed Power Platform and Dataverse layer, Dynamics 365 experiences on top, and AI running through all three."
          align="center"
        />

        <div className={styles.grid}>
          <Reveal as="div" className={styles.visualWrap}>
            <div className={styles.visualCard}>
              <div className={styles.flowRow}>
                <div className={`${styles.flowNode} ${styles.flowFoundation}`}>
                  <span className={styles.flowTag}>01</span>
                  <span className={styles.flowLabel}>Foundation</span>
                </div>
                <div className={styles.flowConnector} />
                <div className={`${styles.flowNode} ${styles.flowPlatform}`}>
                  <span className={styles.flowTag}>02</span>
                  <span className={styles.flowLabel}>Platform</span>
                </div>
                <div className={styles.flowConnector} />
                <div className={`${styles.flowNode} ${styles.flowExperience}`}>
                  <span className={styles.flowTag}>03</span>
                  <span className={styles.flowLabel}>Experience</span>
                </div>
                <div className={styles.flowConnector} />
                <div className={`${styles.flowNode} ${styles.flowIntelligence}`}>
                  <span className={styles.flowTag}>04</span>
                  <span className={styles.flowLabel}>Intelligence</span>
                </div>
              </div>
              <p className={styles.visualCaption}>A horizontal stack of capability layers that grow from platform to experience to intelligence.</p>
            </div>
          </Reveal>

          <div className={styles.copy}>
            <div className={styles.layerList}>
              {layers.map((layer, i) => (
                <Reveal
                  as="div"
                  key={layer.key}
                  delay={i * 90}
                  className={`${styles.layerItem} ${styles[layer.key]}`}
                >
                  <span className={styles.layerDot} />
                  <div>
                    <h3>{layer.title}</h3>
                    <p>{layer.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

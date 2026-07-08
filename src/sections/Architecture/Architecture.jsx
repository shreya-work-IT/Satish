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
      <div className={`container ${styles.grid}`}>
        <Reveal as="div" className={styles.pyramidWrap}>
          <div className={styles.pyramid}>
            <div className={`${styles.pyramidLayer} ${styles.pIntelligence}`}>
              <div className={styles.pyramidContent}>
                <span className={styles.pyramidLabel}>Intelligence — AI</span>
              </div>
            </div>
            <div className={`${styles.pyramidLayer} ${styles.pExperience}`}>
              <div className={styles.pyramidContent}>
                <span className={styles.pyramidLabel}>Experience — Dynamics 365</span>
              </div>
            </div>
            <div className={`${styles.pyramidLayer} ${styles.pPlatform}`}>
              <div className={styles.pyramidContent}>
                <span className={styles.pyramidLabel}>Platform — Power Platform & Dataverse</span>
              </div>
            </div>
            <div className={`${styles.pyramidLayer} ${styles.pFoundation}`}>
              <div className={styles.pyramidContent}>
                <span className={styles.pyramidLabel}>Foundation — Azure</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className={styles.copy}>
          <SectionHeading
            eyebrow="Architecture"
            title="One stack, four layers, built in that order."
            description="This is the shape of almost every engagement: a solid Azure foundation, a governed Power Platform and Dataverse layer, Dynamics 365 experiences on top, and AI running through all three."
          />

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
    </section>
  );
}

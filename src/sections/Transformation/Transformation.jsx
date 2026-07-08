import { SectionHeading } from "../../components/common/SectionHeading";
import { Reveal } from "../../components/common/Reveal";
import styles from "./Transformation.module.css";

const pillars = [
  {
    title: "From scattered to single source",
    description:
      "Customer, service and operational data moves into Dataverse, so every team is looking at the same record instead of their own copy.",
  },
  {
    title: "From manual to orchestrated",
    description:
      "Power Automate and Azure integration take over the hand-offs that used to live in inboxes, spreadsheets and tribal knowledge.",
  },
  {
    title: "From reactive to predictive",
    description:
      "AI reads the same data your teams do, surfacing what needs attention before it becomes a problem instead of after.",
  },
  {
    title: "From static to continuously improving",
    description:
      "Power BI and Azure Monitor turn the platform into a feedback loop, so the next change is guided by evidence, not guesswork.",
  },
];

export function Transformation() {
  return (
    <section id="transformation" className={`section-pad ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <SectionHeading
            eyebrow="Business transformation"
            title="Transformation that changes how work happens, not just how it looks."
            description="Rolling out new software rarely changes behaviour on its own. We pair every platform decision with a change in ownership, process and reporting, so the transformation actually sticks."
          />

          <div className={styles.pillars}>
            {pillars.map((pillar, i) => (
              <Reveal as="div" key={pillar.title} delay={i * 80} className={styles.pillar}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.rippleGraphic}>
            <span className={styles.ring} style={{ animationDelay: "0s" }} />
            <span className={styles.ring} style={{ animationDelay: "-1.3s" }} />
            <span className={styles.ring} style={{ animationDelay: "-2.6s" }} />
            <div className={styles.core}>
              <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
                <path
                  d="M16 4 27 9.5 16 15 5 9.5Z"
                  fill="var(--color-white)"
                />
                <path
                  d="M5 15 16 20.5 27 15"
                  fill="none"
                  stroke="var(--color-white)"
                  strokeOpacity="0.75"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 20.5 16 26 27 20.5"
                  fill="none"
                  stroke="var(--color-white)"
                  strokeOpacity="0.5"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className={`${styles.node} ${styles.nodeA}`}>Sales</span>
            <span className={`${styles.node} ${styles.nodeB}`}>Service</span>
            <span className={`${styles.node} ${styles.nodeC}`}>Finance</span>
            <span className={`${styles.node} ${styles.nodeD}`}>Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "../../components/common/SectionHeading";
import { Reveal } from "../../components/common/Reveal";
import { currentFlow, futureFlow } from "../../data/processFlow";
import styles from "./ProcessFlow.module.css";

function FlowColumn({ label, tone, steps }) {
  return (
    <div className={`${styles.column} ${styles[tone]}`}>
      <span className={styles.columnLabel}>{label}</span>
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div className={styles.step} key={step.label}>
            <div className={styles.stepDot} />
            {i < steps.length - 1 && <div className={styles.stepLine} />}
            <div className={styles.stepBody}>
              <p className={styles.stepLabel}>{step.label}</p>
              <p className={styles.stepDetail}>{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProcessFlow() {
  return (
    <section className={`section-pad ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Current state vs. platform-led flow"
          title="The same request, before and after."
          description="This is the pattern we see in almost every business we work with: work is real, but the path it takes is invisible. Here's what changes once it runs through Dynamics 365, Power Platform and Azure."
        />

        <div className={styles.flows}>
          <Reveal as="div">
            <FlowColumn label="Current process flow" tone="current" steps={currentFlow} />
          </Reveal>
          <div className={styles.arrowDivider} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path
                d="M4 12h15M13 6l6 6-6 6"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Reveal as="div" delay={120}>
            <FlowColumn label="Platform-led flow" tone="future" steps={futureFlow} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

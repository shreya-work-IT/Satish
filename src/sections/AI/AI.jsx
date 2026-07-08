import { SectionHeading } from "../../components/common/SectionHeading";
import { Reveal } from "../../components/common/Reveal";
import { aiPillars, aiPrinciples } from "../../data/aiPillars";
import styles from "./AI.module.css";

export function AI() {
  return (
    <section id="ai" className={`section-pad ${styles.section}`}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          eyebrow="Applied AI"
          title="AI that works inside your platform, not next to it."
          description="Copilot, Copilot Studio and Azure AI plug directly into Dataverse, so the assistant your teams use already understands your customers, cases and processes."
          align="center"
        />

        <div className={styles.pillarGrid}>
          {aiPillars.map((pillar, i) => (
            <Reveal
              as="div"
              key={pillar.title}
              delay={i * 90}
              className={styles.pillarCard}
            >
              <span className={styles.pillarIndex} aria-hidden="true">
                <svg viewBox="0 0 32 32" width="22" height="22">
                  <path
                    d="M16 6c1 4 2.6 5.6 6.5 6.5-3.9 0.9-5.5 2.5-6.5 6.5-1-4-2.6-5.6-6.5-6.5C13.4 11.6 15 10 16 6Z"
                    fill="var(--color-accent-warm)"
                  />
                </svg>
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </Reveal>
          ))}
        </div>

        <div className={styles.flowContainer}>
          <div className={styles.flowSteps} aria-hidden="true">
            <div className={`${styles.step} ${styles.step1}`}>
              <div className={styles.stepCircle}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <div className={styles.stepLabel}>Data In</div>
            </div>

            <div className={styles.connector} />

            <div className={`${styles.step} ${styles.step2}`}>
              <div className={styles.stepCircle}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className={styles.stepLabel}>Understand</div>
            </div>

            <div className={styles.connector} />

            <div className={`${styles.step} ${styles.step3}`}>
              <div className={styles.stepCircle}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className={styles.stepLabel}>Predict</div>
            </div>

            <div className={styles.connector} />

            <div className={`${styles.step} ${styles.step4}`}>
              <div className={styles.stepCircle}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className={styles.stepLabel}>Execute</div>
            </div>
          </div>

          <ul className={styles.principles}>
            {aiPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

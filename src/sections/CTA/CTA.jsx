import { Button } from "../../components/common/Button";
import { Reveal } from "../../components/common/Reveal";
import styles from "./CTA.module.css";

export function CTA() {
  return (
    <section className={`section-pad ${styles.section}`}>
      <div className="container">
        <Reveal as="div" className={styles.panel}>
          <span className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <span className="eyebrow">Let's talk</span>
            <h2 className={styles.title}>
              Tell us where the platform is slowing you down.
            </h2>
            <p className={styles.sub}>
              Whether you&rsquo;re starting from a legacy CRM, a patchwork of
              spreadsheets, or an existing Dynamics 365 estate that&rsquo;s
              outgrown its design, we&rsquo;ll help you map the shortest path
              to a platform that keeps up.
            </p>
            <div className={styles.actions}>
              <Button href="mailto:hello@satishdynamics.com">
                Start a conversation
              </Button>
              <Button href="#capabilities" variant="outline" className={styles.outlineOnDark}>
                Review our capabilities
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

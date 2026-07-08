import { SectionHeading } from "../../components/common/SectionHeading";
import { CapabilityIcon } from "../../components/common/CapabilityIcon";
import { Reveal } from "../../components/common/Reveal";
import { capabilities } from "../../data/capabilities";
import styles from "./Capabilities.module.css";

export function Capabilities() {
  return (
    <section id="capabilities" className={`section-pad ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities & skills"
          title="Everything you need across the Microsoft ecosystem, under one roof."
          description="Each area below is a practice we run daily, not a slide we add for the pitch. Together they cover the platform end to end — from the data model underneath to the AI layer on top."
        />

        <div className={styles.grid}>
          {capabilities.map((cap, i) => (
            <Reveal as="article" key={cap.title} delay={(i % 4) * 70} className={styles.card}>
              <span className={styles.iconBadge}>
                <CapabilityIcon name={cap.icon} />
              </span>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardSummary}>{cap.summary}</p>
              <ul className={styles.skillList}>
                {cap.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

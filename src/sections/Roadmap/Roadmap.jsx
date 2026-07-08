import { SectionHeading } from "../../components/common/SectionHeading";
import { Reveal } from "../../components/common/Reveal";
import { roadmapStages } from "../../data/roadmap";
import styles from "./Roadmap.module.css";

export function Roadmap() {
  return (
    <section id="roadmap" className={`section-pad ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="How we build"
          title="A project roadmap built in stages, not a big-bang release."
          description="Every engagement follows the same five stages. The scope changes with the size of the business; the sequence doesn't, because each stage depends on evidence from the one before it."
        />

        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />
          {roadmapStages.map((item, i) => (
            <Reveal as="div" key={item.stage} delay={i * 90} className={styles.stageWrap}>
              <div className={styles.stage}>
                <span className={styles.stageNumber}>{item.stage}</span>
                <div className={styles.stageBody}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className={styles.output}>{item.output}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

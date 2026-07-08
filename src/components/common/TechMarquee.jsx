import { techStack } from "../../data/techStack";
import styles from "./TechMarquee.module.css";

/**
 * Renders the tech stack twice back to back so the CSS keyframe can
 * translate exactly -50% and loop seamlessly, giving one continuous row.
 */
export function TechMarquee() {
  const track = [...techStack, ...techStack];

  return (
    <div className={styles.marquee} role="list" aria-label="Technology stack">
      <div className={styles.fade} aria-hidden="true" data-side="left" />
      <div className={styles.fade} aria-hidden="true" data-side="right" />
      <div className={styles.track}>
        {track.map((tech, i) => (
          <div className={styles.item} role="listitem" key={`${tech.name}-${i}`}>
            <span className={styles.iconWrap}>
              <img src={tech.icon} alt="" width="22" height="22" loading="lazy" />
            </span>
            <span className={styles.label}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

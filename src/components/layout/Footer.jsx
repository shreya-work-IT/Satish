import { footerNav } from "../../data/navigation";
import styles from "./Footer.module.css";

function FooterColumn({ title, links }) {
  return (
    <div className={styles.col}>
      <h3 className={styles.colTitle}>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.top}`}>
        <div className={styles.brandBlock}>
          <a href="#top" className={styles.logo}>
            <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
              <path d="M16 4 27 9.5 16 15 5 9.5Z" fill="var(--color-accent)" />
              <path
                d="M5 15 16 20.5 27 15"
                fill="none"
                stroke="var(--color-primary-soft)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 20.5 16 26 27 20.5"
                fill="none"
                stroke="var(--color-accent-warm)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Satish Dynamics</span>
          </a>
          <p className={styles.brandCopy}>
            A Microsoft ecosystem partner for Dynamics 365, Dataverse, Power
            Platform, Azure and applied AI — helping enterprise teams
            redesign how work moves through their business.
          </p>
          <a href="mailto:hello@satishdynamics.com" className={styles.contactLink}>
            hello@satishdynamics.com
          </a>
        </div>

        <FooterColumn title="Capabilities" links={footerNav.capabilities} />
        <FooterColumn title="Services" links={footerNav.services} />
        <FooterColumn title="Company" links={footerNav.company} />
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} Satish Dynamics. All rights reserved.</p>
        <div className={styles.legal}>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}

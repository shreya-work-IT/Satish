import { useEffect, useState } from "react";
import { primaryNav } from "../../data/navigation";
import { Button } from "../common/Button";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label="Satish Dynamics home">
          <span className={styles.logoMark} aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30">
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
          </span>
          <span className={styles.logoText}>
            Satish <span className={styles.logoTextLight}>Dynamics</span>
          </span>
        </a>

        <nav className={styles.navDesktop} aria-label="Primary">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="#contact" size="sm">
            Start a conversation
          </Button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.navMobile} ${open ? styles.navMobileOpen : ""}`}
        aria-label="Primary mobile"
      >
        <ul>
          {primaryNav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

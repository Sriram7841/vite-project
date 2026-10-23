import React, { useEffect, useState } from "react";
import ResumeFile from "../assets/Resume.pdf";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-inner">
        <a href="#top" className="navbar-logo">
          <span className="logo-mark">SP</span>
          Sriram<span className="logo-accent">.</span>
        </a>

        <div className={menuOpen ? "navbar-links mobile-open" : "navbar-links"}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={ResumeFile}
            download="Sriram_Posimsetti_Resume.pdf"
            className="resume-btn mobile-resume"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>

        <a
          href={ResumeFile}
          download="Sriram_Posimsetti_Resume.pdf"
          className="resume-btn desktop-resume"
        >
          Resume ↓
        </a>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </button>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import ResumeFile from "../assets/Resume.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <h1 className="navbar-logo">
          Sriram<span>Posimsetti</span>
        </h1>

        {/* NAV LINKS (Desktop) */}
        <div className={menuOpen ? "navbar-links mobile-open" : "navbar-links"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certificates</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          {/* Resume button inside mobile menu */}
          <a
            href={ResumeFile}
            download="Sriram_Posimsetti_Resume.pdf"
            className="resume-btn mobile-resume"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>

        {/* Desktop Resume Button – RIGHT SIDE */}
        <a
          href={ResumeFile}
          download="Sriram_Posimsetti_Resume.pdf"
          className="resume-btn desktop-resume"
        >
          Resume
        </a>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? "bar bar1 open" : "bar bar1"}></div>
          <div className={menuOpen ? "bar bar2 open" : "bar bar2"}></div>
          <div className={menuOpen ? "bar bar3 open" : "bar bar3"}></div>
        </div>

      </div>
    </nav>
  );
}

import React from "react";
import myPic from "../assets/sri.jpg";

export default function Hero() {
  return (
    <section className="hero">
      {/* LEFT CONTENT */}
      <div className="hero-content">
        <span className="hero-badge">Available for opportunities</span>

        <h1 className="hero-title">
          Hi, I'm <span>Sriram</span>
        </h1>

        <h2 className="hero-role">Full Stack Developer & AI Engineer</h2>

        <p className="hero-subtitle">
          I build scalable web applications and AI-powered solutions using
          React, Django, PostgreSQL, and AWS.
        </p>

        <div className="hero-tags">
          <span>Full Stack Development</span>
          <span>Cloud & DevOps</span>
          <span>AI/ML Integration</span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>
          <a href="/resume.pdf" className="btn-secondary">
            Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://www.www.linkedin.com/in/sriram-posimsetti-a8b519292.com" aria-label="LinkedIn">in</a>
          <a href="mailto:sriramposimsetti15@gmail.com" aria-label="Email">✉</a>
          <a href="https://github.com/Sriram7841" aria-label="GitHub">GitH</a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">
        <div className="image-layer layer-back"></div>
        <div className="image-layer layer-mid"></div>

        <div className="hero-card">
          <img
            src={myPic}
            alt="Sriram Posimsetti"
            className="hero-img"
          />
        </div>
      </div>

    </section>
  );
}

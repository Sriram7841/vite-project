import React from "react";
import myPic from "../assets/profile.jpeg";
import ResumeFile from "../assets/Resume.pdf";

export default function Hero() {
  return (
    <section id="top" className="hero section section--purple">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="pulse-dot"></span> Open to on-site opportunities
          </span>

          <h1 className="hero-title">
            Hi, I'm <span>Sriram Posimsetti</span>
          </h1>

          <h2 className="hero-role">
            AI/ML Engineer · LLM Pipelines · RAG Systems · Generative AI
          </h2>

          <p className="hero-subtitle">
            I build, evaluate, and optimize LLM-based pipelines, RAG systems and
            document-processing workflows for production-grade applications —
            tuning for accuracy, latency and cost.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-light">
              View My Work →
            </a>
            <a
              href={ResumeFile}
              download="Sriram_Posimsetti_Resume.pdf"
              className="btn btn-outline-light"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>1+</strong>
              <span>Year in AI/ML</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Production AI projects</span>
            </div>
            <div>
              <strong>RAG</strong>
              <span>LangChain · FAISS · OpenAI</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-ring"></div>
          <div className="hero-card">
            <img src={myPic} alt="Sriram Posimsetti" className="hero-img" />
          </div>
          <div className="hero-chip chip-a">🤖 LLM Pipelines</div>
          <div className="hero-chip chip-b">📍 Hyderabad, India</div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import myPic from "../assets/profile.jpeg";
import ResumeFile from "../assets/Resume.pdf";

export default function Hero() {
  return (
    <section id="top" className="hero section section--sunrise">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="pulse-dot"></span> Open to on-site opportunities
          </span>

          <h1 className="hero-title">
            Hi, I'm <span>Sriram Posimsetti</span>
          </h1>

          <h2 className="hero-role">
            AI/ML Engineer · LLM & RAG Systems · GraphRAG · Generative AI · Medical Imaging
          </h2>

          <p className="hero-subtitle">
            I build LLM pipelines, RAG and GraphRAG systems, and deep learning
            applications for healthcare and enterprise — from brain MRI report
            generation to research assistants over 200K+ arXiv papers.
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
              <strong>2+</strong>
              <span>Years in AI/ML</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Featured AI projects</span>
            </div>
            <div>
              <strong>GraphRAG</strong>
              <span>LangChain · FAISS · PyTorch</span>
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

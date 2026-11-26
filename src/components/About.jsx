import React from "react";

export default function About() {
  return (
    <section id="about" className="section section--light">
      <div className="section-header">
        <p className="eyebrow">About Me</p>
        <h2 className="section-title">
          Crafting AI-Powered <span>Experiences</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h3>
            An AI/ML Engineer focused on reliable, measurable LLM systems
          </h3>

          <p>
            I have 2+ years of experience building LLM pipelines, RAG and
            GraphRAG systems, and deep learning applications for healthcare and
            enterprise use. I work with Python, PyTorch, Hugging Face
            Transformers, LangChain, LangGraph, FAISS and Django/FastAPI.
          </p>

          <p>
            Recent work includes a brain MRI report generator built on a 3D
            Vision Transformer with MedGemma LoRA fine-tuning, and a GraphRAG
            research assistant that answers questions over 206,489 arXiv
            papers. I evaluate models rigorously (ROUGE, BLEU, F1) and ship
            full-stack AI apps with REST APIs, JWT authentication and admin
            dashboards.
          </p>

          <div className="about-badges">
            <span className="badge">💼 AI/ML Engineer at Ecode Learning</span>
            <span className="badge">📍 Hyderabad, India</span>
            <span className="badge">🎓 B.Tech EEE — YSR Engineering College</span>
          </div>
        </div>

        <div className="about-highlights">
          {[
            { icon: "🧠", title: "LLM, RAG & GraphRAG", text: "Retrieval pipelines and knowledge graphs with LangChain, FAISS and NetworkX." },
            { icon: "🩻", title: "Medical Imaging", text: "3D Vision Transformers and MedGemma LoRA on MRI, NIfTI and DICOM data." },
            { icon: "📊", title: "Evaluation", text: "ROUGE, BLEU-4, F1 and human review to measure accuracy, latency & cost." },
            { icon: "☁️", title: "Full-Stack AI", text: "Django/FastAPI APIs with JWT auth and admin dashboards, deployed on AWS." },
          ].map((h) => (
            <div className="highlight-card" key={h.title}>
              <span className="highlight-icon">{h.icon}</span>
              <h4>{h.title}</h4>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            I have 1+ year of hands-on experience building, evaluating and
            optimizing LLM-based pipelines, RAG systems and document processing
            workflows. I'm proficient in Python, Hugging Face Transformers,
            LangChain and OpenAI LLMs, with strong expertise in embeddings,
            vector databases (FAISS) and prompt engineering.
          </p>

          <p>
            At Ecode Learning Software Services I run experiments to optimize
            accuracy, latency and cost, and develop evaluation datasets and
            validation frameworks that keep AI systems trustworthy in
            production.
          </p>

          <div className="about-badges">
            <span className="badge">💼 AI/ML Engineer at Ecode Learning</span>
            <span className="badge">📍 Hyderabad, India</span>
            <span className="badge">🎓 B.Tech EEE — YSR Engineering College</span>
          </div>
        </div>

        <div className="about-highlights">
          {[
            { icon: "🧠", title: "LLM & RAG", text: "End-to-end retrieval pipelines with LangChain, FAISS and OpenAI." },
            { icon: "📊", title: "Evaluation", text: "ROUGE, human benchmarks and validation frameworks for LLM output." },
            { icon: "⚡", title: "Optimization", text: "Experiments on chunking, embeddings and top-k for accuracy, latency & cost." },
            { icon: "☁️", title: "Production", text: "FastAPI inference endpoints deployed on AWS with CI/CD." },
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

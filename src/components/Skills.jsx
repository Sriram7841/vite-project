import React from "react";

const skillGroups = [
  { icon: "💻", title: "Languages", items: ["Python", "JavaScript", "SQL"] },
  {
    icon: "🧠",
    title: "LLM & Gen AI",
    items: ["OpenAI LLMs", "Hugging Face Transformers", "LangChain", "LangGraph", "RAG Architecture", "Prompt Engineering", "RLHF", "Agentic AI", "Instruction Tuning", "Embeddings"],
  },
  { icon: "🔬", title: "ML Frameworks", items: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn"] },
  { icon: "🗂️", title: "Vector Databases", items: ["FAISS", "Semantic Search", "Similarity Retrieval"] },
  {
    icon: "📄",
    title: "Doc Processing",
    items: ["Multi-document ingestion", "PDF parsing", "Text chunking", "Embedding generation"],
  },
  {
    icon: "📏",
    title: "Evaluation",
    items: ["ROUGE scoring", "Human evaluation benchmarks", "Accuracy / latency / cost optimization", "Validation framework design"],
  },
  {
    icon: "💬",
    title: "NLP",
    items: ["Text classification", "Text mining", "Summarization", "NER", "BioBERT", "Pattern recognition"],
  },
  { icon: "🔌", title: "APIs & Backend", items: ["FastAPI", "Django REST Framework", "Flask", "Streamlit"] },
  { icon: "🛢️", title: "Databases", items: ["PostgreSQL", "MySQL"] },
  {
    icon: "👁️",
    title: "Computer Vision",
    items: ["CNN", "OpenCV", "Transfer Learning", "Image Classification", "Object Detection"],
  },
  { icon: "🛠️", title: "Tools & Cloud", items: ["Git", "GitHub", "Postman", "VSCode", "Power BI", "AWS (EC2, S3, Lambda)", "Docker"] },
];

const competencies = [
  "LLM Pipeline Development", "RAG System Design", "Document Processing", "Embeddings & Vector Search",
  "Prompt Engineering", "Model Fine-Tuning", "RLHF", "Hugging Face Transformers",
  "LangChain & LangGraph", "OpenAI LLMs", "Evaluation Dataset Development", "Validation Frameworks",
  "Accuracy & Latency Optimization", "Generative AI", "Agentic AI", "NLP",
  "Python", "AWS", "FastAPI", "Production AI Systems",
];

export default function Skills() {
  return (
    <section id="skills" className="section section--purple">
      <div className="section-header">
        <p className="eyebrow">My Expertise</p>
        <h2 className="section-title">
          Skills <span>& Technologies</span>
        </h2>
        <p className="section-desc">
          A toolkit for building intelligent, measurable and scalable AI applications
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.title}>
            <div className="skill-group-head">
              <span className="skill-icon">{g.icon}</span>
              <h3>{g.title}</h3>
            </div>
            <div className="skill-tags">
              {g.items.map((s) => (
                <span className="skill-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="competencies">
        <h3>Core Competencies</h3>
        <div className="marquee">
          <div className="marquee-track">
            {[...competencies, ...competencies].map((c, i) => (
              <span key={i} className="competency-pill">✦ {c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

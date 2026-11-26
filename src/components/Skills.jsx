import React from "react";

const skillGroups = [
  { icon: "💻", title: "Languages", items: ["Python", "JavaScript", "SQL"] },
  {
    icon: "🧠",
    title: "LLM & Gen AI",
    items: ["OpenAI LLMs", "Mistral-7B", "MedGemma", "Hugging Face Transformers", "LangChain", "LangGraph", "RAG", "GraphRAG", "Agentic AI", "Prompt Engineering", "LoRA/PEFT Fine-Tuning", "Instruction Tuning", "RLHF"],
  },
  {
    icon: "🗂️",
    title: "Retrieval & Vector Search",
    items: ["FAISS", "Sentence-Transformers", "Embeddings", "Semantic Search", "Knowledge Graphs (NetworkX)", "Text Chunking", "Document Ingestion", "PDF Parsing"],
  },
  {
    icon: "👁️",
    title: "Deep Learning & CV",
    items: ["PyTorch", "TensorFlow", "Keras", "Vision Transformers (3D ViT)", "CNN", "Transfer Learning", "OpenCV", "HOG Features", "Medical Imaging (MRI, NIfTI, DICOM)"],
  },
  {
    icon: "💬",
    title: "ML & NLP",
    items: ["Scikit-learn", "XGBoost", "Random Forest", "SVM", "Naive Bayes", "TF-IDF", "Text Classification", "NER", "Summarization", "BioBERT"],
  },
  {
    icon: "📏",
    title: "Evaluation",
    items: ["ROUGE-1/2/L", "BLEU-4", "Accuracy", "Precision / Recall / F1", "AUC-ROC", "Human Evaluation", "Latency & Cost Optimization"],
  },
  {
    icon: "🔌",
    title: "Backend & APIs",
    items: ["Django", "Django REST Framework", "JWT Authentication", "FastAPI", "Flask", "Streamlit", "REST APIs"],
  },
  { icon: "🎨", title: "Frontend", items: ["React", "Vite", "HTML", "CSS"] },
  {
    icon: "🛢️",
    title: "Data & Databases",
    items: ["Pandas", "NumPy", "PostgreSQL", "MySQL", "SQLite", "Hugging Face Datasets", "Parquet"],
  },
  { icon: "🛠️", title: "Cloud & Tools", items: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD", "Git", "GitHub", "Postman", "VS Code", "Power BI"] },
];

const competencies = [
  "LLM Pipeline Development", "RAG System Design", "GraphRAG", "Knowledge Graphs",
  "Embeddings & Vector Search", "Prompt Engineering", "LoRA/PEFT Fine-Tuning", "Vision Transformers",
  "Medical Imaging AI", "MedGemma", "LangChain & LangGraph", "Agentic AI",
  "Model Evaluation (ROUGE, BLEU, F1)", "Evaluation Dataset Development", "Latency & Cost Optimization", "Generative AI",
  "NLP", "Django & FastAPI", "AWS", "Full-Stack AI Applications",
];

export default function Skills() {
  return (
    <section id="skills" className="section section--sunrise">
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

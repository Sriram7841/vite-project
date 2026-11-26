import React from "react";

export default function Experience() {
  const experiences = [
    {
      type: "Full-time",
      role: "AI/ML Engineer & Full Stack Developer",
      company: "Ecode Learning Software Services",
      duration: "June 2024 – Present",
      location: "Hyderabad, India",
      points: [
        "Build and optimize RAG and document processing pipelines using LangChain, FAISS and OpenAI LLMs for enterprise knowledge management.",
        "Benchmark LLM outputs on accuracy, latency and cost, and iterate on prompt strategies to improve performance.",
        "Run experiments comparing embedding models, chunking strategies and retrieval settings to reduce hallucinations and improve answer relevance.",
        "Develop evaluation datasets and validation frameworks to measure LLM output quality, with automated testing for production AI systems.",
        "Fine-tune transformer models with Hugging Face on domain-specific data using instruction tuning and LoRA/PEFT.",
        "Integrate Generative AI and agentic workflows (LangGraph) into production applications deployed on AWS (EC2, S3, Lambda) with CI/CD.",
        "Expose model inference through FastAPI and Django REST endpoints for real-time, low-latency AI features.",
        "Deliver full-stack AI applications with admin dashboards for dataset upload, model training, evaluation and user management.",
      ],
    },
    {
      type: "Internship",
      role: "Machine Learning Intern",
      company: "SAK Informatics",
      duration: "June 2023 – July 2023",
      location: "India",
      points: [
        "Built and evaluated supervised ML models for classification and regression on large real-world datasets.",
        "Performed data preprocessing, feature engineering and exploratory data analysis for model training pipelines.",
        "Tracked accuracy, precision, recall and F1-score across experiments to improve model quality.",
      ],
    },
  ];

  return (
    <section id="experience" className="section section--sunrise">
      <div className="section-header">
        <p className="eyebrow">Career Journey</p>
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        <p className="section-desc">
          Building intelligent solutions and growing as an AI professional
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.company}>
            <div className="timeline-dot"></div>
            <div className="exp-card">
              <div className="exp-top">
                <span className="exp-type">{exp.type}</span>
                <span className="exp-meta">
                  {exp.duration} · {exp.location}
                </span>
              </div>
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
              <ul className="exp-list">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

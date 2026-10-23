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
        "Evaluate and improve LLM-based pipelines by benchmarking model outputs across accuracy, latency and cost; iterate on prompt strategies to optimize performance.",
        "Build and optimize RAG systems and document processing pipelines using LangChain, FAISS and OpenAI LLMs for enterprise knowledge management.",
        "Run systematic experiments comparing embedding models, chunking strategies and retrieval configurations to reduce hallucination rates and improve contextual relevance.",
        "Develop evaluation datasets and validation frameworks to measure LLM output quality; implement automated testing pipelines for production AI systems.",
        "Fine-tune transformer-based LLMs using Hugging Face on domain-specific datasets, applying instruction tuning and RLHF-ready alignment strategies.",
        "Integrate Generative AI and Agentic AI workflows (LangGraph) into scalable production applications deployed on AWS (EC2, S3, Lambda) with CI/CD pipelines.",
        "Design and expose ML model inference endpoints via FastAPI for real-time, low-latency LLM-powered application features.",
      ],
    },
    {
      type: "Internship",
      role: "Machine Learning Intern",
      company: "SAK Informatics",
      duration: "June 2023 – July 2023",
      location: "India",
      points: [
        "Assisted in building and evaluating supervised ML models for classification and regression tasks on real-world large datasets.",
        "Performed data preprocessing, feature engineering and exploratory data analysis to prepare model training pipelines.",
        "Ran model evaluation experiments tracking accuracy, precision, recall and F1-score to assess and improve model quality.",
      ],
    },
  ];

  return (
    <section id="experience" className="section section--purple">
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

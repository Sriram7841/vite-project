import React from "react";

export default function Experience() {
  const experiences = [
    {
      type: "Full-time",
      role: "ML Engineer",
      company: "ECode Learning Software Services",
      duration: "June 2024 – Present",
      location: "Hyderabad, India",
      points: [
        "Building scalable Python full-stack applications using Django & Flask.",
        "Designing and deploying ML models for NLP, predictive analytics, and AI solutions.",
        "Analyzing structured/unstructured datasets including audio & image data.",
        "Supporting PhD scholars with research work, literature review, data analysis.",
        "Delivering secure and high-performance applications to clients."
      ],
    },
    {
      type: "Internship",
      role: "ML Intern",
      company: "Sak Informatics",
      duration: "June 2023 – July 2023",
      location: "India",
      points: [
        "Assisted in developing ML models using Python & scikit-learn.",
        "Handled data preprocessing, feature engineering, and cleaning.",
        "Evaluated and optimized ML model performance."
      ],
    }
  ];

  return (
    <section id="experience" className="exp-section">
      <div className="exp-header">
        <p className="exp-subtitle">CAREER JOURNEY</p>
        <h2 className="exp-title">
          Work <span>Experience</span>
        </h2>
        <p className="exp-desc">
          Building intelligent solutions and growing as an AI professional
        </p>
      </div>

      <div className="exp-grid">
        {experiences.map((exp, index) => (
          <div className="exp-card" key={index}>
            <div className="exp-type">{exp.type}</div>

            <div className="exp-row">
              <span>{exp.duration}</span>
              <span>{exp.location}</span>
            </div>

            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-company">{exp.company}</p>

            <ul className="exp-list">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

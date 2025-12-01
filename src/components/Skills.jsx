import React from "react";

export default function Skills() {
  const skills = [
    { name: "Python", level: 95, color: "#fbbf24" },
    { name: "Machine Learning", level: 90, color: "#a855f7" },
    { name: "Image Processing", level: 82, color: "#ec4899" },
    { name: "Fine-Tuning LLMs", level: 90, color: "#22d3ee" },
    { name: "Flask", level: 88, color: "#60a5fa" },
    { name: "Streamlit", level: 85, color: "#f97316" },
    { name: "Power BI", level: 78, color: "#facc15" },
    { name: "JavaScript", level: 85, color: "#f59e0b" },
    { name: "Deep Learning", level: 85, color: "#c084fc" },
    { name: "LangChain", level: 86, color: "#14b8a6" },
    { name: "Hugging Face", level: 85, color: "#fb923c" },
    { name: "React", level: 80, color: "#38bdf8" },
    { name: "Git/GitHub", level: 90, color: "#64748b" },
    { name: "MySQL", level: 80, color: "#0ea5e9" },
    { name: "NLP", level: 88, color: "#ec4899" },
    { name: "RAG", level: 88, color: "#14b8a6" },
    { name: "Django", level: 90, color: "#22c55e" },
    { name: "HTML/CSS", level: 90, color: "#fb923c" },
    { name: "AWS", level: 75, color: "#f59e0b" },
    { name: "Blockchain", level: 80, color: "#38bdf8"}
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-header">
        <p className="skills-subtitle">My Expertise</p>
        <h2 className="skills-title">
          Skills <span>& Technologies</span>
        </h2>
        <p className="skills-desc">
          A comprehensive toolkit for building intelligent, scalable applications
        </p>
      </div>

      <div className="skills-grid-modern">
        {skills.map((skill, i) => (
          <div className="skill-card-modern" key={i}>
            <div className="skill-card-head">
              <span>{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%`, background: skill.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

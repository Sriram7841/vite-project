import React from "react";

export default function Certificates() {
  const certificates = [
    {
      title: "Machine Learning Internship",
      org: "Sak Informatics",
      date: "July 2023",
      desc: "Completed hands-on machine learning internship focusing on preprocessing, feature engineering, and model development.",
    },
    {
      title: "MERN Stack Certification",
      org: "Udemy",
      date: "2024",
      desc: "Completed MERN full-stack development program covering MongoDB, Express, React, and Node.js.",
    },
    {
      title: "Generative AI Certification",
      org: "iNeuron",
      date: "2024",
      desc: "Completed Generative AI course covering LLMs, diffusion models, RAG, and end-to-end AI pipelines.",
    },
    {
      title: "PowerBI Workshop",
      org: "OfficeMaster",
      date: "Dec 1st, 2024",
      desc: "Successfully completed PowerBI workshop focusing on AI-powered dashboards and business analytics.", 
    }
  ];

  return (
    <section id="certifications" className="certs-section">
      <div className="certs-header">
        <p className="certs-subtitle">ACHIEVEMENTS</p>
        <h2 className="certs-title">
          Certifications <span>& Workshops</span>
        </h2>
        <p className="certs-desc">
          Professional certifications showcasing continuous learning and hands-on expertise.
        </p>
      </div>

      <div className="certs-grid">
        {certificates.map((cert, i) => (
          <div className="cert-card" key={i}>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-org">{cert.org}</p>

            <div className="cert-row">
              <span className="cert-date">{cert.date}</span>
            </div>

            <p className="cert-desc">{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
